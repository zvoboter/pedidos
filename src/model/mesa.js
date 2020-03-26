const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const MesaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
        unique: true
    }
});

MesaSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Mesa', MesaSchema);