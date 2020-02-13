const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PessoaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
});

PessoaSchema.plugin(mongoosePaginate);

mongoose.model('Pessoa', PessoaSchema);