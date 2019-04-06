var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Client Model
 * =============
 *  name
 *  image
 *  link
 */

var Client = new keystone.List('Client', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Client.add({
	name: { type: String, required: true },
    images: { type: Types.CloudinaryImages },
    link:{ type: String }
});

Client.register();
