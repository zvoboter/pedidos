const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PedidoItem = new mongoose.Schema({
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

PedidoItem.plugin(mongoosePaginate);

module.exports = mongoose.model('PedidoItem', PedidoItem);