const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ItemSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
        unique: true
    },
    valor: {
        type: Number,
        required: true
    },
    imagem: {
        type: String
    },
    imagemUrl: {
        type: String
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria'
    }
});

ItemSchema.plugin(mongoosePaginate);

mongoose.model('Item', ItemSchema);