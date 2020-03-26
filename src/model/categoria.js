const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CategoriaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
        unique: true
    }
});

CategoriaSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Categoria', CategoriaSchema);