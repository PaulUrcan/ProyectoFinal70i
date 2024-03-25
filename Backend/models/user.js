const { Schema, model } = require("mongoose");
const UserSchema = Schema({
    name:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    mail:{
        type:String,
        required:[true, "El correo es obligatorio"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "La contraseña es obligatoria"]
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
    user.id=_id;
    user.password=password;
    return user;
}

module.exports=model("User", UserSchema)