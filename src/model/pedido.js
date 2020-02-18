const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PedidoSchema = new mongoose.Schema({
    cliente: {
        type: String,
        required: true,
        unique: true
    },
    pago: {
        type: Boolean,
        default: false
    },
    data: {
        type: Date,
        default: new Date()
    },
    dataPgto: {
        type: Date
    },
    mesa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mesa'
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa'
    },
    garcom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

PedidoSchema.plugin(mongoosePaginate);

mongoose.model('Pedido', PedidoSchema);