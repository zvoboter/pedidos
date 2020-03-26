const Item = require('../model/item');
const cloudinary = require('cloudinary').v2;

module.exports = {
    async search(req, res) {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        let filter = req.query.descricao ? { "descricao": { $regex: new RegExp(req.query.descricao, "i") } } : {};
        const itens = await Item.paginate(filter, { page, limit });

        return res.json(itens);
    },
    async getById(req, res) {
        let item = await Item.findById(req.params.id).lean();

        return res.json(item);
    },
    async insert(req, res) {
        if (req.body.imagem) {
            await cloudinary.uploader.upload(`data:image/png;base64,${req.body.imagem}`,
                function (error, result) {
                    req.body.imagemUrl = result.url;
                    if (result.url) {
                        req.body.imagemUrl = result.url;
                    } else if (error) {
                        console.error(error);
                    }
                });
            req.body.imagem = undefined;
        }

        const item = await Item.create(req.body);

        return res.json(item);
    },
    async update(req, res) {
        if (req.body.imagem) {
            await cloudinary.uploader.upload(`data:image/png;base64,${req.body.imagem}`,
                function (error, result) {
                    if (result.url) {
                        req.body.imagemUrl = result.url;
                    } else if (error) {
                        console.error(error);
                    }
                });
            req.body.imagem = undefined;
        }

        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(item);
    },
    async delete(req, res) {
        const item = await Item.findByIdAndRemove(req.params.id);

        return res.send();
    }
};