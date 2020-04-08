const { Model } = require('objection');

class Subseccion extends Model {
  static get tableName() {
    return 'subsecciones';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['seccion_id', 'numero', 'cuerpo'],
      properties: {
        id: { type: 'integer' },
        seccion_id: { type: 'integer' },
        numero: { type: 'integer' },
        cuerpo: { type: 'json' },
      }
    };
  }

  static get relationMappings() {
    const Curso = require('./Curso');

    return {
    	seccion: {
        relation: Model.BelongsToRelation,
        modelClass: Curso,
        join: {
          from: 'subsecciones.seccion_id',
          to: 'secciones.id'
        }
      },
    };
  }
}

module.exports = Subseccion;
