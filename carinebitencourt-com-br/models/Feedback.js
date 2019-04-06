var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Feedback Model
 * =============
 *  name
 *  image
 *  conteudo
 */

var Feedback = new keystone.List('Feedback', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Feedback.add({
	name: { type: String, required: true },
    images: { type: Types.CloudinaryImages },
    content:{ type: String }
});

Feedback.register();
