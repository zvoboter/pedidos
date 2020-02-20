const mongoose = require('mongoose');
const Pagamento = mongoose.model('Pagamento');

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        if (req.query.pedido) {
            const filter = { "pedido": req.query.pedido };
            const pagamentos = await Pagamento.paginate(filter, { page, limit, populate: 'pedido' });

            return res.json(pagamentos);
        } else {
            res.sendStatus(403);
            return res.json({ "erro": "Informe um pedido para filtrar." });
        }
    },
    async getById(req, res) {
        const pagamento = await Pagamento.findById(req.params.id).populate('pedido');

        return res.json(pagamento);
    },
    async insert(req, res) {
        const pagamento = await Pagamento.create(req.body);

        return res.json(pagamento);
    },
    async update(req, res) {
        const pagamento = await Pagamento.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(pagamento);
    },
    async delete(req, res) {
        const pagamento = await Pagamento.findByIdAndRemove(req.params.id);

        return res.send();
    }
};