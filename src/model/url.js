const { Schema, Model, default: mongoose } = require("mongoose");

const urlSchema = new Schema({
    urlTitle:{
        type:String,
        required:[true,"Title is required"],
    },
    urlDescription:{
        type:String,
        required:[true,"Description is required"]
    },
    url:{
        type:String,
        required:[true,"URL is required"]
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        required:true
    }
})

export const urlModel =  mongoose.models.urls  || mongoose.model("urls",urlSchema)