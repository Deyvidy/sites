var keystone = require('keystone'),
    Jobs = keystone.list('Post');

exports.getAll = function ( req, res ) {
    Jobs.model.find().sort('name').exec(function(err, jobs) {
        if (err) {
            return res.json({
                succes : false,
                messagem : "nada encontrado"
            });
        } else {
            return res.json({
                succes: true,
                jobs:jobs
            });
        }
    });
};
