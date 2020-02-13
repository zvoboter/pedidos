const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const IdentificacaoSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    pessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pessoa"
    }
});

IdentificacaoSchema.plugin(mongoosePaginate);

mongoose.model('Identificacao', IdentificacaoSchema);