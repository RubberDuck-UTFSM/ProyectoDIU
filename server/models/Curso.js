const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true, 
		unique: true
	},
	titulo: {
		type: String,
		required: true
	},
	descripcion: {
		type: String,
		required: true
	},
	url_imagen: {
		type: String,
		required: true
	}
});

const Curso = mongoose.model("Curso", cursoSchema);

module.exports = { Curso };