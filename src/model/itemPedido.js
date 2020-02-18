const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ItemPedido = new mongoose.Schema({
    quantidade: {
        type: Number,
        required: true
    },
    pago: {
        type: Boolean,
        default: false
    },
    pedido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pedido'
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }
});

ItemPedido.plugin(mongoosePaginate);

mongoose.model('ItemPedido', ItemPedido);