const mongoose = require('mongoose');
const Identificacao = mongoose.model('Identificacao');

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        let filter = req.query.nome ? { "descricao": { $regex: new RegExp(req.query.descricao, "i") } } : {};
        const identificacao = await Identificacao.paginate(filter, { page, limit, populate: "pessoa" });

        return res.json(identificacao);
    },
    async getById(req, res) {
        const identificacao = await Identificacao.findById(req.params.id).populate('pessoa');

        return res.json(identificacao);
    },
    async insert(req, res) {
        const identificacao = await Identificacao.create(req.body);

        return res.json(identificacao);
    },
    async update(req, res) {
        const identificacao = await Identificacao.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(identificacao);
    },
    async delete(req, res) {
        const identificacao = await Identificacao.findByIdAndRemove(req.params.id);

        return res.send();
    }
};