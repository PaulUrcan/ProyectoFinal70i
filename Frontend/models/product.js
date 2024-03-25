const { Schema, model } = require("mongoose");
const ProductSchema = Schema({
    name:{
        type:String,
        required:[true, "Name is mandatory!"]
    },
    description:{
        type:String,
        required:[true, "Description is mandatory!"]
    },
    price:{
        type:Number,
        required:[true, "La contraseña es obligatoria"]
    },
    src:{
        type:String,
    },
    category:{
        type:String
    },
    stock:{
        type:Number,
        required:[true, "El stock es obligatorio"]
    },
})

ProductSchema.methods.toJSON=function () {
    const {__v,_id,...product} = this.toObject();
    product.id=_id;
    return product;
}

module.exports=model("Product", ProductSchema)