const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PagamentoItem = new mongoose.Schema({
    valor: {
        type: Number
    },
    pagamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pagamento',
        required: true,
    },
    itemPedido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemPedido',
        required: true
    }
});

PagamentoItem.plugin(mongoosePaginate);

module.exports = mongoose.model('PagamentoItem', PagamentoItem);