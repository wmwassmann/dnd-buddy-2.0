// *********************************************************************************
// api-routes.js - this file offers a set of routes for posting / getting the api call
// *********************************************************************************

// Dependencies
// =============================================================
const express = require('express');
const router = express.Router();

// Import the model (index.js) to use its database functions.
const db = require('../models');

// Import passport model for its function
const passport = require('../config/passport-config');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require('../config/middleware/isAuthenticated');

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post('/api/login', passport.authenticate('local'), function (req, res) {
	res.json({
		email: req.user.email,
		id: req.user.id,
	});
});

// Route for registering a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post('/api/register', function (req, res) {
	db.User.create({
		email: req.body.email,
		password: req.body.password,
	})
		.then(function () {
			res.redirect(307, '/api/login');
			// res.render('indexmodal')
		})
		.catch(function (err) {
			res.status(401).json(err);
		});
});

// Route for logging user out
router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

// Route for getting some data about our user to be used in frontend
router.get('/api/user_data', function (req, res) {
	if (!req.user) {
		// The user is not logged in, send back an empty object
		res.json({});
	} else {
		// Otherwise send back the user's email and id
		// Sending back a password, even a hashed password, isn't a good idea
		res.json({
			email: req.user.email,
			id: req.user.id,
		});
	}
});

// get the fullname list from database
router.get('/api/charname', isAuthenticated, function (req, res) {
	db.CharName.findAll({})
		.then(function (charNameFullList) {
			res.json(charNameFullList);
		})
		.catch(function (err) {
			res.status(500).json(err);
		});
});

// get the full char class list from database
router.get('/api/charclass', isAuthenticated, function (req, res) {
	db.CharClass.findAll({})
		.then(function (charClassFullList) {
			res.json(charClassFullList);
		})
		.catch(function (err) {
			res.status(500).json(err);
		});
});

// get the full char race list from database
router.get('/api/charrace', isAuthenticated, function (req, res) {
	db.Race.findAll({})
		.then(function (charRaceFullList) {
			res.json(charRaceFullList);
		})
		.catch(function (err) {
			res.status(500).json(err);
		});
});

// get one specific random name from the database
router.get('/api/charnameone', isAuthenticated, async function (req, res) {
	// find the max row number from the charname table
	const charNameTotal = await db.CharName.count({});
	// res.json for showing the result into the browser (commant it our because it can only show once in one get call)
	// res.json(charNameTotal);
	// console log the result
	console.log(charNameTotal);
	const charRandomNum = Math.floor(Math.random() * charNameTotal + 1);
	await db.CharName.findOne({
		where: { id: charRandomNum },
	})
		.then(function (charNameResult) {
			res.json(charNameResult);
		})
		.catch(function (err) {
			res.status(500).json(err);
		});
	// function for solely get the respone to json (reference only)
	// db.CharName.count({}).then(function (charNameCount) {
	// 	res.json(charNameCount);
	// });
});

// the api call for all the char data from the database to json
router.get('/api/findCharByUserID', isAuthenticated, async function (req, res) {
	const resultArray = [];
	// locate the id from the user database
	// console.log(req.user);
	const userId = req.user.id;
	// 1. find any char under this id
	const findChar = await db.MainDatabase.findOne({
		// include: [{ model: db.CharClass }],
		where: { user_id: userId },
	});
	// console.log(findChar);
	resultArray.push(findChar);
	// res.json(findChar);

	// 2. link up the charClass info
	const findCharClass = await db.CharClass.findOne({
		include: [
			{
				model: db.MainDatabase,
				where: { user_id: userId },
				attributes: ['id'],
			},
		],
	});
	// console.log(findCharClass);
	resultArray.push(findCharClass);

	// 3. link up the charrace info
	const findCharRace = await db.Race.findOne({
		include: [
			{
				model: db.MainDatabase,
				where: { user_id: userId },
				attributes: ['id'],
			},
		],
	});
	// console.log(findCharRace);
	resultArray.push(findCharRace);

	// 4. link up the weapon info
	const findCharWeapon = await db.CharWeapon.findAll({
		include: [
			{
				model: db.MainDatabase,
				where: { user_id: userId },
				attributes: ['id'],
			},
		],
	});
	// console.log(findCharWeapon);
	resultArray.push(findCharWeapon);

	// 5. link up the spell info
	const findCharSpell = await db.CharSpell.findAll({
		include: [
			{
				model: db.MainDatabase,
				where: { user_id: userId },
				attributes: ['id'],
			},
		],
	});
	// console.log(findCharSpell);
	resultArray.push(findCharSpell);
	res.json(resultArray);
});

module.exports = router;
