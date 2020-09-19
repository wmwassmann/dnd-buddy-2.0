// Main server
// Get the dependencies
const express = require('express');

// Sets up the Express App and PORT for Frontend
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Set the route
const htmlRoute = require('../project2test2/routes/htmlRoutes');
const apiRoute = require('../project2test2/routes/apiRoutes');

// app.use('/api', apiRoute);
// app.use('/', htmlRoute);

// sync the sequelize model
db.sequelize.sync({ force: true }).then(function () {
	app.listen(PORT, function () {
		console.log('App listening on PORT ' + PORT);
	});
});
