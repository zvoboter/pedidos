const mongoose = require('mongoose');
const Item = mongoose.model('Item');

module.exports = {
    async index(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        let filter = req.query.descricao ? { "descricao": { $regex: new RegExp(req.query.descricao, "i") } } : {};
        const itens = await Item.paginate(filter, { page, limit });

        return res.json(itens);
    },
    async show(req, res) {
        const item = await Item.findById(req.params.id);

        return res.json(item);
    },
    async store(req, res) {
        const item = await Item.create(req.body);

        return res.json(item);
    },
    async update(req, res) {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(item);
    },
    async destroy(req, res) {
        const item = await Item.findByIdAndRemove(req.params.id);

        return res.send();
    }
};