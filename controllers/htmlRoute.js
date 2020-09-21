// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const express = require('express');

const router = express.Router();

// Import the model (index.js) to use its database functions.
const db = require('../models');

// Routes
// =============================================================

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
	res.render('index');
});

module.exports = router;
