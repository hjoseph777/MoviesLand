const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// middleware: must be logged in
function isLoggedIn(req, res, next) {
    if (!req.session || !req.session.user) {
        return res.redirect('/auth/login');
    }
    next();
}

// middleware: must own the movie
async function isOwner(req, res, next) {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).send('Movie not found');
        }

        // check owner
        if (!req.session.user || !movie.owner || movie.owner.toString() !== req.session.user._id.toString()) {
            return res.status(403).send('You are not allowed to modify this movie');
        }

        // store movie so later handlers don't need to refetch
        req.movie = movie;
        next();
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}

// 11. GET new movie form - restricted
router.get('/new', isLoggedIn, (req, res) => {
    res.render('new-movie', { errors: {}, formData: {} });
});

// 11. POST create movie - restricted
router.post('/', isLoggedIn, async (req, res) => {
    try {
        const body = { ...req.body };

        // handle genres as comma separated list
        if (typeof body.genres === 'string' && body.genres.trim() !== '') {
            body.genres = body.genres.split(',').map(g => g.trim());
        }

        // attach the owner field
        body.owner = req.session.user._id;

        const newMovie = new Movie(body);
        await newMovie.save();

        res.redirect(`/movies/${newMovie._id}`);
    } catch (err) {
        console.error(err);
        if (err.name === 'ValidationError') {
            const errors = {};
            Object.keys(err.errors).forEach(key => {
                errors[key] = err.errors[key].message;
            });

            return res.render('new-movie', {
                errors,
                formData: req.body
            });
        }

        res.status(500).send('Server error');
    }
});

// 12. GET edit form - only owner can see it
router.get('/:id/edit', isLoggedIn, isOwner, (req, res) => {
    const movie = req.movie;
    res.render('edit-movie', { errors: {}, movie });
});

// 12. POST update movie - only owner can update
router.post('/:id/edit', isLoggedIn, isOwner, async (req, res) => {
    try {
        const body = { ...req.body };

        if (typeof body.genres === 'string' && body.genres.trim() !== '') {
            body.genres = body.genres.split(',').map(g => g.trim());
        }

        const movie = req.movie;

        movie.name = body.name;
        movie.description = body.description;
        movie.year = body.year;
        movie.genres = body.genres;
        movie.rating = body.rating;
        movie.director = body.director;

        await movie.save();

        res.redirect(`/movies/${movie._id}`);
    } catch (err) {
        console.error(err);
        if (err.name === 'ValidationError') {
            const errors = {};
            Object.keys(err.errors).forEach(key => {
                errors[key] = err.errors[key].message;
            });

            return res.render('edit-movie', {
                errors,
                movie: {
                    ...req.body,
                    _id: req.params.id,
                    genres: req.body.genres
                        ? req.body.genres.split(',').map(g => g.trim())
                        : []
                }
            });
        }

        res.status(500).send('Server error');
    }
});

// 12. POST delete movie - only owner can delete
router.post('/:id/delete', isLoggedIn, isOwner, async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.redirect('/movies/new');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// 6. show movie details (no restriction)
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).send('Movie not found');
        }
        res.render('movie-details', { movie });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
