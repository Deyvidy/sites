var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Render the view
	view.query('blog', keystone.list('Post').model.find());
	view.query('doctor', keystone.list('Doctor').model.find());
	view.render('index');
};
