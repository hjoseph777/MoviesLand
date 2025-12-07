const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const keys = require('./config/keys');
const movieRoutes = require('./routes/movies');
const authRoutes = require('./routes/auth');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

const dbUrl = process.env.DB_URL || keys.MongoURI;

// connect to MongoDB
mongoose.connect(dbUrl)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sessions
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false
}));


app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});


// make user available in every EJS template as "user"
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);

// default route
app.get('/', (req, res) => {
    res.redirect('/movies/new');
});

app.listen(PORT, () => {
    console.log(`MoviesLand app running on port ${PORT}`);
});
