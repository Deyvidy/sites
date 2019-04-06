var keystone = require('keystone'),
    Jobs = keystone.list('Doctor');

exports.getAll = function ( req, res ) {
    var dados = {
        limit : JSON.parse(req.body.maximo),
        skip : JSON.parse(req.body.inicio)
    }

    Jobs.model.find().limit(dados.limit).skip(dados.skip).sort('name').exec(function(err, jobs) {
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

exports.getCount = function ( req, res ) {
    
    Jobs.model.find().count().sort('name').exec(function(err, jobs) {
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