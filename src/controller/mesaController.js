const mongoose = require('mongoose');
const Mesa = mongoose.model('Mesa');

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        let filter = req.query.nome ? { "descricao": { $regex: new RegExp(req.query.descricao, "i") } } : {};
        const mesas = await Mesa.paginate(filter, { page, limit });

        return res.json(mesas);
    },
    async getById(req, res) {
        const mesa = await Mesa.findById(req.params.id);

        return res.json(mesa);
    },
    async insert(req, res) {
        const mesa = await Mesa.create(req.body);

        return res.json(mesa);
    },
    async update(req, res) {
        const mesa = await Mesa.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(mesa);
    },
    async delete(req, res) {
        const mesa = await Mesa.findByIdAndRemove(req.params.id);

        return res.send();
    }
};