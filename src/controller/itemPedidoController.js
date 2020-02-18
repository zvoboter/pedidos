const mongoose = require('mongoose');
const ItemPedido = mongoose.model('ItemPedido');

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        if (req.query.pedido) {
            const itensPedido = await ItemPedido.paginate(req.query.pedido, { page, limit, populate: ['item', 'pedido'] });

            return res.json(itensPedido);
        } else {
            res.sendStatus(403);
            return res.json({ "erro": "Informe um pedido para filtrar." });
        }

    },
    async getById(req, res) {
        const itemPedido = await ItemPedido.findById(req.params.id).populate('item').populate('pedido');

        return res.json(itemPedido);
    },
    async insert(req, res) {
        const itemPedido = await ItemPedido.create(req.body);

        return res.json(itemPedido);
    },
    async update(req, res) {
        const itemPedido = await ItemPedido.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(itemPedido);
    },
    async delete(req, res) {
        const itemPedido = await ItemPedido.findByIdAndRemove(req.params.id);

        return res.send();
    }
};