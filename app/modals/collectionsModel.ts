const { default: mongoose } = require("mongoose");

const collectionsShcema =mongoose.Schema({
    collectionName:{
        type:String,
        required:true,
    },
    imageURL:{type:String},
    description:{String},
    });

    const collectionsModel= mongoose.models.collections || mongoose.model('collections', collectionsShcema)

    export default collectionsModel;