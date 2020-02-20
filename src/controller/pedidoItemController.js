const mongoose = require('mongoose');
const PedidoItem = mongoose.model('PedidoItem');

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        if (req.query.pedido) {
            const filter = { "pedido": req.query.pedido };
            const itensPedido = await PedidoItem.paginate(filter, { page, limit, populate: ['item', 'pedido'] });

            return res.json(itensPedido);
        } else {
            res.sendStatus(403);
            return res.json({ "erro": "Informe um pedido para filtrar." });
        }

    },
    async getById(req, res) {
        const pedidoItem = await PedidoItem.findById(req.params.id).populate('item').populate('pedido');

        return res.json(pedidoItem);
    },
    async insert(req, res) {
        const pedidoItem = await PedidoItem.create(req.body);

        return res.json(pedidoItem);
    },
    async update(req, res) {
        const pedidoItem = await PedidoItem.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(pedidoItem);
    },
    async delete(req, res) {
        const pedidoItem = await PedidoItem.findByIdAndRemove(req.params.id);

        return res.send();
    }
};