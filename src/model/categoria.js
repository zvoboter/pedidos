const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CategoriaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    }
});

CategoriaSchema.plugin(mongoosePaginate);

mongoose.model('Categoria', CategoriaSchema);