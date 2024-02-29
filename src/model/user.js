const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name:{
        type: String,
        required:[true,"Name is required"]
    },
    email:{
        type: String,
        required:[true,"Email is required"]
    },
    password:{
        type: String,
        required:[true,"Password is required"]
    }
})

export const User =  mongoose.models.users || mongoose.model("users",userSchema);