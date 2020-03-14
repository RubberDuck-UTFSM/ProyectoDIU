module.exports = function (fastify, opts, done) {

const CursosController = require("./controllers/CursosController.js");

const routes = [
  {
    method: "GET",
    url: "/cursos",
    handler: CursosController.getAllCursos
  },
  {
    method: "POST",
    url: "/cursos",
    handler: CursosController.addCurso
  }
];

  routes.forEach(route => fastify.route(route));
  done();
}

