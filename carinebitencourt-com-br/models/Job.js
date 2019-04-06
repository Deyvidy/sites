var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Header Model
 * =============
 *  small image
 *  modal image
 *  link
 *  tag
 */

var Job = new keystone.List('Job',
	{autokey: {from: 'name', path:'name', unique: true}}
);

Job.add({
	name: { type: String, required: true, index: true},
    image: { type: Types.CloudinaryImages, riquired: false, label:'Imagem que vai aparecer na galeria de projetos' },
    modalImage: { type: Types.CloudinaryImages, riquired: false, label:'Imagem que vai aparecer na modal' },
    link: { type: String, required:false},
    tag: { type: Types.Relationship, ref: 'Category', required: true, initial: true, label: 'categoria a que pertence o projeto' }
});

Job.relationship({ref: 'Category', refPath:'job', path: 'category'})

Job.defaultColumns = 'name';
Job.register();
