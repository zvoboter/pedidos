const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        let filter = req.query.usuario ? { "usuario": { $regex: new RegExp(req.query.usuario, "i") } } : {};
        const usuarios = await Usuario.paginate(filter, { page, limit, populate: 'pessoa' });

        return res.json(usuarios);
    },
    async getById(req, res) {
        const usuario = await Usuario.findById(req.params.id).populate('pessoa');

        return res.json(usuario);
    },
    async insert(req, res) {
        const usuario = await Usuario.create(req.body);

        return res.json(usuario);
    },
    async update(req, res) {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(usuario);
    },
    async delete(req, res) {
        const usuario = await Usuario.findByIdAndRemove(req.params.id);

        return res.send();
    }
};