var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Load the products by sortOrder
	view.query('products', keystone.list('Product').model.find().sort('sortOrder'));

	// Load the feedbacks by sortOrder
	view.query('feedbacks', keystone.list('Feedback').model.find().sort('sortOrder'));

	view.query('headers', keystone.list('Header').model.find());

	view.query('jobs', keystone.list('Job').model.find());


	// Load the galleries by sortOrder
	view.query('clients', keystone.list('Client').model.find().sort('sortOrder'));

	// Render the view
	view.render('index');
};
