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

mongoose.model('Mesa', MesaSchema);