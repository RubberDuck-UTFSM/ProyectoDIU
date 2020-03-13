const { Curso } = require('../models/Curso.js');

const getAllCursos = async (req, reply) => {
  try {
    const cursos = await Curso.find();
    return cursos;
  }
  catch (err) { console.log(err) }
}

const addCurso = async (req, reply) => {
	try {
		const newCurso = new Curso({ ...req });
		return newCurso.save();
	} catch (err) {
		console.log(err);
	}
};

const updateCurso = async (req, reply) => {
  try {
    const { id } = req.params;
    const { curso } = req.body;
    const updatedCurso = await Curso.findOneAndUpdate({id}, curso, { new: true });
    return updatedCurso;
  }
  catch (err) { console.log(err) }
}

const deleteCurso = async (req, reply) => {
  try {
    const { id } = req.params;
    const menuItem = await MenuItem.findOneAndDelete({ id });
    return menuItem;
  }
  catch (err) { console.log(err) }
}

module.exports = { getAllCursos, addCurso, updateCurso, deleteCurso };