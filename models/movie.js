const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Movie name is required']
    },
    description: {
        type: String
    },
    year: {
        type: Number,
        required: [true, 'Release year is required'],
        min: [1888, 'Year must be valid'],
        max: [2026, 'Year cannot exceed 4 digits']
    },
    genres: {
        type: [String], 
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    director: {
        type: String,
        required: [true, 'Director name is required']
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Movie', movieSchema);