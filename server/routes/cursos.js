const nconf = require('nconf');
const { getAllCursos, getCursoByNombre } = require('../controllers/CursosController');

module.exports = async (fastify) => {
  fastify.get('/api/cursos/', getAllCursos);
  fastify.get('/api/cursos/:nombre', getCursoByNombre);
};