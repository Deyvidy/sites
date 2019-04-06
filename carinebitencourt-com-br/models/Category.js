var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Category Model
 * =============
 *  small image
 *  modal image
 *  link
 *  tag
 */

var Category = new keystone.List('Category',
	{autokey: {from: 'name', path:'name', unique: true}}
);

Category.add({
	name: { type: String, required: true, index: true}
});

Category.defaultColumns = 'name';
Category.register();
