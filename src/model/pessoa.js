const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PessoaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    documento: {
        type: String,
        required: true,
        unique: true
    }
});

PessoaSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pessoa', PessoaSchema);