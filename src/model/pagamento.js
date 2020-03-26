const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PagamentoSchema = new mongoose.Schema({
    valor: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: new Date()
    },
    pedido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pedido'
    }
});

PagamentoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pagamento', PagamentoSchema);