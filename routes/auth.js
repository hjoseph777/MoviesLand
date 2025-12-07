const express = require('express');
const router = express.Router();
// use bcryptjs so it works nicely with newer Node versions
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// GET: registration form
router.get('/register', (req, res) => {
    res.render('register', { errors: {}, formData: {} });
});

// POST: registration submit
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const errors = {};

    if (!username) errors.username = 'Username is required to continue';
    if (!email) errors.email = 'Email is required to continue';
    if (!password) errors.password = 'Password is required to continue';
    if (password && password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(errors).length > 0) {
        return res.render('register', { errors, formData: req.body });
    }

    try {
        // check if user exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            errors.email = 'Email is already registered';
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            errors.username = 'Username is taken';
        }

        if (Object.keys(errors).length > 0) {
            return res.render('register', { errors, formData: req.body });
        }

        // hash password and save
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        // log them in after registration
        req.session.user = {
            _id: user._id,
            username: user.username,
            email: user.email
        };

        res.redirect('/movies/new');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// GET: login form
router.get('/login', (req, res) => {
    res.render('login', { errors: {}, formData: {} });
});

// POST: login submit
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const errors = {};

    if (!email) errors.email = 'Email is required to continue';
    if (!password) errors.password = 'Password is required to continue';

    if (Object.keys(errors).length > 0) {
        return res.render('login', { errors, formData: req.body });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            errors.email = 'No account with that email';
            return res.render('login', { errors, formData: req.body });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            errors.password = 'Incorrect password';
            return res.render('login', { errors, formData: req.body });
        }

        // save user in session
        req.session.user = {
            _id: user._id,
            username: user.username,
            email: user.email
        };

        res.redirect('/movies/new');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// 10. LOGOUT ROUTE
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            return res.status(500).send("Could not log out");
        }
        res.redirect('/auth/login');
    });
});


module.exports = router;
