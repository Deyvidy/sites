var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals= res.locals;

    // Set locals
    locals.section = 'header';
    
    view.query('headers', keystone.list('Header').model.find());
    view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));


    view.render('header');
}