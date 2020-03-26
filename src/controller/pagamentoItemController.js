const PagamentoItem = require('../model/pagamentoitem');

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        if (req.query.pagamento) {
            const filter = { "pagamento": req.query.pagamento }
            const pagamentoItens = await PagamentoItem.paginate(filter, { page, limit, populate: ['pedidoItem', 'pagamento'] });

            return res.json(pagamentoItens);
        } else {
            res.sendStatus(403);
            return res.json({ "erro": "Informe um pagamento para filtrar." });
        }

    },
    async getById(req, res) {
        const pagamentoItem = await PagamentoItem.findById(req.params.id).populate('pedidoItem').populate('pagamento');

        return res.json(pagamentoItem);
    },
    async insert(req, res) {
        const pagamentoItem = await PagamentoItem.create(req.body);

        return res.json(pagamentoItem);
    },
    async update(req, res) {
        const pagamentoItem = await PagamentoItem.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(pagamentoItem);
    },
    async delete(req, res) {
        const pagamentoItem = await PagamentoItem.findByIdAndRemove(req.params.id);

        return res.send();
    }
};