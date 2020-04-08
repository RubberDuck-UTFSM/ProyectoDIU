const nconf = require("nconf");
const {
	getAllSecciones,
	getSubSecciones,
	getSubSeccion,
	updateSubSeccion,
	addSubSeccion,
	addSeccion
} = require("../controllers/SeccionesController");

module.exports = async fastify => {
	fastify.get("/api/secciones", getAllSecciones);
	fastify.get("/api/seccion/:id", getSubSecciones);
	fastify.get("/api/subseccion/:id", getSubSeccion);
	fastify.post("/api/subseccion/:id", updateSubSeccion);
	fastify.post("/api/subseccion", addSubSeccion);
	fastify.post("/api/seccion", addSeccion);
};
