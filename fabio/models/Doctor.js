var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Doctor Model
 * ==========
 */

var Doctor = new keystone.List('Doctor', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Doctor.add({
	title: { type: String, required: true, label:'Nome' },
	speciality: { type: String, required: true, label:'Especialidade', initial: true },
	description : { type: String, required: true, label:'Descrição', initial: true },
	website : { type: Types.Url },
	instagram : { type: Types.Url },
	facebook : { type: Types.Url },
	twitter : { type: Types.Url },
	photo: { type: Types.CloudinaryImage ,label:'Foto capa'},
	image: { type: Types.CloudinaryImage ,label:'Foto perfil'},
});

Doctor.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Doctor.defaultColumns = 'title, speciality, state|20%, author|20%, publishedDate|20%';
Doctor.register();
