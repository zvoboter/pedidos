const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        let filter = {};
        if (req.query.pago) {
            filter.pago = req.query.pago;
        } else {
            filter.pago = false;
        }

        if (req.query.dataInicial) {
            filter.dataInicial = new Date(req.query.dataInicial);
        } else {
            filter.dataInicial = new Date();
            filter.dataInicial.setHours(-24);
            filter.dataInicial.toISOString();
        }

        if (req.query.dataFinal) {
            filter.dataFinal = new Date(req.query.dataFinal);
        } else {
            filter.dataFinal = new Date();
            filter.dataFinal.toISOString();
        }

        const pedidos = await Pedido.paginate({
            "data": {
                "$gte": filter.dataInicial,
                "$lte": filter.dataFinal
            },
            "pago": filter.pago
        }, { page, limit, populate: ['garcom', 'cliente'] });

        return res.json(pedidos);
    },
    async getById(req, res) {
        const pedido = await Pedido.findById(req.params.id).populate('garcom').populate('cliente');

        return res.json(pedido);
    },
    async insert(req, res) {
        const pedido = await Pedido.create(req.body);

        return res.json(pedido);
    },
    async update(req, res) {
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(pedido);
    },
    async delete(req, res) {
        const pedido = await Pedido.findByIdAndRemove(req.params.id);

        return res.send();
    }
};