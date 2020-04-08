const Seccion = require("../models/Seccion");
const Subseccion = require("../models/Subseccion");

const getAllSecciones = async (req, res) => {
	return Seccion.query();
};
const getSubSecciones = async (req, res) => {
	return Seccion.relatedQuery("subsecciones")
		.for(req.params.id)
		.orderBy("numero");
};

const getSubSeccion = async (req, res) => {
	return Subseccion.query().findById(req.params.id);
};

const updateSubSeccion = async (req, res) => {
	const subseccion = await Subseccion.query()
		.findById(req.params.id)
		.patch({
			numero: req.body.numero,
			cuerpo: req.body.cuerpo
		});
	return subseccion;
};

const addSeccion = async (req, res) => {
	const seccion = await Seccion.query().insert({
		curso_id: parseInt(req.body.curso_id),
		titulo: req.body.titulo,
		descripcion: req.body.descripcion,
		color: req.body.color,
		url_imagen: req.body.url_imagen,
		numero: parseInt(req.body.numero),
	});

	return seccion;
};

const addSubSeccion = async (req, res) => {
	const subseccion = await Subseccion.query().insert({
		seccion_id: parseInt(req.body.seccion_id),
		numero: parseInt(req.body.numero),
		cuerpo: req.body.cuerpo,
	});

	return subseccion;
};

module.exports = {
	getAllSecciones,
	getSubSecciones,
	getSubSeccion,
	updateSubSeccion,
	addSubSeccion,
	addSeccion
};
