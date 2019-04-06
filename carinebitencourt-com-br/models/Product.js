var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * =============
 *  imagem
 *  titulo
 */

var Product = new keystone.List('Product',
	{autokey: {from: 'name', path:'name', unique: true}}
);

Product.add({
	name: { type: String, required: true, index: true},
	subtitle: { type: String, required: false },
	image: { type: Types.CloudinaryImages, riquired: true },
});

Product.defaultColumns = 'name';
Product.register();
