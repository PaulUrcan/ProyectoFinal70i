const { Schema, model } = require("mongoose");
const UserSchema = Schema({
    name:{
        type:String,
        required:[true, "Name is mandatory!"]
    },
    mail:{
        type:String,
        required:[true, "Email is mandatory!"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is mandatory!"]
    },
    img:{
        type:String,
    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
})

UserSchema.methods.toJSON=function () {
    const {__v,password,_id,...user} = this.toObject();
    user.uid=_id;
    user.password=password;
    return user;
}

module.exports=model("User", UserSchema)