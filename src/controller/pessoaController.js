const Pessoa = require('../model/pessoa');

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        let filter = req.query.nome ? { "nome": { $regex: new RegExp(req.query.nome, "i") } } : {};
        const pessoas = await Pessoa.paginate(filter, { page, limit });

        return res.json(pessoas);
    },
    async getById(req, res) {
        const pessoa = await Pessoa.findById(req.params.id);

        return res.json(pessoa);
    },
    async insert(req, res) {
        const pessoa = await Pessoa.create(req.body);

        return res.json(pessoa);
    },
    async update(req, res) {
        const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(pessoa);
    },
    async delete(req, res) {
        const pessoa = await Pessoa.findByIdAndRemove(req.params.id);

        return res.send();
    }
};