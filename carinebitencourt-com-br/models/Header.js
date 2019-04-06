var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Header Model
 * =============
 */

var Header = new keystone.List('Header',
	{autokey: {from: 'name', path:'name', unique: true}}
);

Header.add({
	name: { type: String, required: true, index: true},
	subTitulo: { type: String, required: false },
	image: { type: Types.CloudinaryImages, riquired: false },
});

Header.defaultColumns = 'name';
Header.register();
