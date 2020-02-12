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
    }
});

ItemSchema.plugin(mongoosePaginate);

mongoose.model('Item', ItemSchema);