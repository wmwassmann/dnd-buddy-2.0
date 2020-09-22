// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const express = require('express');
const router = express.Router();

// Import the model (index.js) to use its database functions.
const db = require('../models');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

// Routes
// =============================================================

// Create all our routes and set up logic within those routes where required.

// the route for register the account to our database
router.get('/register', function (req, res) {
	// If the user already has an account send them to the members page
	if (req.user) {
		return res.redirect('/');
	}
	res.render('register', { layout: 'auth' });
});

// the route for login into the page
router.get('/login', function (req, res) {
	// If the user already sign in an account send them to the main page
	if (req.user) {
		return res.redirect('/');
	}
	res.render('login', { layout: 'auth' });
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get('/', isAuthenticated, function (req, res) {
	res.render('index');
});

module.exports = router;
