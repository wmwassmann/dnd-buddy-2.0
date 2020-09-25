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
const mainDatabase = require('../models/mainDatabase');

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the landing page.
// Otherwise the user will be sent an error
router.post('/api/login', passport.authenticate('local'), function (req, res) {
	// console.log('api login run');
	res.json({
		email: req.user.email,
		id: req.user.id,
	});
});

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the landing page with modal.
// Otherwise the user will be sent an error
router.post(
	'/api/indexModal',
	passport.authenticate('local', {
		successRedirect: '/indexModal',
		failureRedirect: '/login',
		// failureFlash: true,
	}),
	function (req, res) {
		// console.log('post api indexmodal am running');
		res.json({
			email: req.user.email,
			id: req.user.id,
		});
	}
);

// Route for registering a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post('/api/register', function (req, res) {
	db.User.create({
		email: req.body.email,
		password: req.body.password,
	})
		.then(function () {
			res.redirect(307, '/api/indexModal');
		})
		.catch(function (err) {
			res.status(401).json(err);
		});
});

// Route for the save button to save charname/charclass/charrace/chargender to the user's ID in the database
// Assign this route to the save button in the front end
router.put('/api/save', async function (req, res, next) {
	console.log('save database');
	console.log(req.body);

// url: '/api/save',
// type: 'PUT',
// data: {
// 	char_name: name,
// 	race_id: race,
// 	char_class_id: charClass,
// 	char_gender: charGender,
	// db.CharClass.update({
	// 	{race: req.body.race_id},
	// 	{where: {
	// 		id: req.body.char_id
	// 	  }
	// 	})
	// })
	db.MainDatabase.update(
	  {name: req.body.char_name},
	//   {race: req.body.race_id},
	//   {class: req.body.char_class_id},
	  {gender: req.body.char_gender},
	  {where: {
		id: req.body.char_id
	  }
	})
	// .then(function(rowsUpdated) {
	//   res.json(rowsUpdated)
	// })
	// .catch(next)
	const findCharClass = await db.CharClass.findOne({
		include: [
			{
				model: db.MainDatabase,
				where: { id: req.body.char_id },
				attributes: ['id'],
			},
		],
	});
	findCharClass.CharClass.updateAttribute(
		{name: req.body.char_class},
	)
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

// get the full name list from database
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
	// res.json for showing the result into the browser (comment it out because it can only show once in one get call)
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

	// 3. link up the charRace info
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
