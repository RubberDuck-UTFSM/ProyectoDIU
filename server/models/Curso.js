const { Model } = require('objection');

class Curso extends Model {
  static get tableName() {
    return 'cursos';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nombre', 'color', 'descripcion', 'url_imagen'],
      properties: {
        id: { type: 'integer' },
        nombre: { type: 'string' },
        color: { type: 'string' },
        descripcion: { type: 'string' },
        url_imagen: { type: 'string' },
      }
    };
  }

  static get relationMappings() {
    const Seccion = require('./Seccion');

    return {
    	secciones: {
    	  relation: Model.HasManyRelation,
    	  modelClass: Seccion,
    	  join: {
    	    from: 'cursos.id',
    	    to: 'secciones.curso_id'
    	  }
    	},
    };
  }
}

module.exports = Curso;
