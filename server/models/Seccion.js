const { Model } = require('objection');

class Seccion extends Model {
  static get tableName() {
    return 'secciones';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['curso_id', 'titulo', 'descripcion', 'color', 'numero', 'url_imagen'],
      properties: {
        id: { type: 'integer' },
        curso_id: { type: 'integer' },
        numero: { type: 'integer' },
        titulo: { type: 'string' },
        color: { type: 'string' },
        descripcion: { type: 'string' },
        url_imagen: { type: 'string' },
        
      }
    };
  }

  static get relationMappings() {
    const Curso = require('./Curso');
    const Subseccion = require('./Subseccion');

    return {
    	curso: {
        relation: Model.BelongsToRelation,
        modelClass: Curso,
        join: {
          from: 'secciones.curso_id',
          to: 'curso.id'
        }
      },
      subsecciones: {
        relation: Model.HasManyRelation,
        modelClass: Subseccion,
        join: {
          from: 'secciones.id',
          to: 'subsecciones.seccion_id'
        }
      },
    };
  }
}

module.exports = Seccion;
