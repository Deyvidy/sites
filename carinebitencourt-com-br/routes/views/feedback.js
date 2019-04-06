var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'feedback';

	// Load the galleries by sortOrder
	view.query('feedbacks', keystone.list('Feedback').model.find().sort('sortOrder'));

	// Render the view
	view.render('feedback');

};
