const CursosController = require("./controllers/CursosController.js");

const routes = [
  {
    method: "GET",
    url: "/cursos",
    preValidation: fastify.auth([
      (req, res, next) =>
        fastify.authToken(req, res, next, {
          public: global.public,
          login: true
        })
    ]),
    handler: CursosController.getAllCursos
  },
  {
    method: "POST",
    url: "/cursos",
    handler: CursosController.addCurso
  }
];

module.exports = routes;