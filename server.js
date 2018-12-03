const express = require("express");
const session = require('express-session');
const passport = require('passport');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// For Passport
app.use(session({ secret: 'jumping llama',resave: false, saveUninitialized:false})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
require('./routes/api-routes.js')(app);
require('./routes/user-routes.js')(app);

// Connect to the Mongo DB

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/improvements";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});