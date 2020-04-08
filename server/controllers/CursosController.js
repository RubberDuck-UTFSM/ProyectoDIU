const Curso = require("../models/Curso.js");

const getAllCursos = async (req, reply) => {
  return Curso.query().withGraphJoined(
      "[secciones]"
    );
};

const getCursoByNombre = async (req, reply) => {
  return Curso.query()
    .withGraphJoined(
      "[secciones]"
    )
    .where("nombre", req.params.nombre);
};

module.exports = { getAllCursos, getCursoByNombre };
