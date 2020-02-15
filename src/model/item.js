const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ItemSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    imagemBuffer: {
        type: Buffer,
        contentType: String
    },
    imagem: {
        type: String
    }

});

ItemSchema.plugin(mongoosePaginate);

mongoose.model('Item', ItemSchema);