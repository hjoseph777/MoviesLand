# MoviesLand Application
A simple Express application for managing a movie database using MongoDB (Atlas).

## Get started

1. Install dependencies

   ```bash
   npm install express mongoose ejs 
   ```

Configuration
This project uses a configuration file for the MongoDB connection. Navigate to config/keys.js. Please change the keys to the users personal db connection string to see the changes in the database.

2. Start the app

   ```bash
   node app.js
   ```

Project runs at http://localhost:3000/

Project Structure
/moviesland
├── app.js               # Entry point, server setup, DB connection
├── config/
│   └── keys.js          # Database connection strings
├── models/
│   └── movie.js         # Mongoose schema and model definition
├── routes/
│   └── movies.js        # Express routes for movie operations
└── views/
    └── new-movie.ejs    # Frontend form template using EJS