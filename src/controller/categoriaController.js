const mongoose = require('mongoose');
const Categoria = mongoose.model('Categoria');

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        let filter = req.query.descricao ? { "descricao": { $regex: new RegExp(req.query.descricao, "i") } } : {};
        const categorias = await Categoria.paginate(filter, { page, limit });

        return res.json(categorias);
    },
    async getById(req, res) {
        const categoria = await Categoria.findById(req.params.id);

        return res.json(categoria);
    },
    async insert(req, res) {
        const categoria = await Categoria.create(req.body);

        return res.json(categoria);
    },
    async update(req, res) {
        const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(categoria);
    },
    async delete(req, res) {
        const categoria = await Categoria.findByIdAndRemove(req.params.id);

        return res.send();
    }
};