const mongoose = require("mongoose");

const MetaSchema = new mongoose.Schema({
    metaRestanteSemanal: { 
        type: Number,
        required: true,
        default: 19500 
    },
    metaTotalSemanal: {
        type: Number,
        required: true,
        default: 19500
    }
});

module.exports = mongoose.model("Meta", MetaSchema);