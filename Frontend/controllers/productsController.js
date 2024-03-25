const Product = require("../models/product")

const getProducts = async (req,res)=>{
    const {limit=5,from=0} = req.query;
    const products = await Product.find().skip(Number(from)).limit(Number(limit));
    res.json({products})
}

const addProduct = async (req,res)=>{
    const {name,description,price,src,category,stock} = req.body;
    const product = {name,description,price,src,category,stock};
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({message:"Product created succesfully!", product:newProduct})
}

const updateProduct = async (req,res)=>{
    const {id} = req.params;
    const {name,description,price,src,category,stock} = req.body;
    const product = {name,description,price,src,category,stock}
    const productUpdate = await Product.findByIdAndUpdate(id,product,{new:true});
    res.status(201).json({productUpdate,message:"Product Updated!"})
}

const deleteProduct = async (req,res)=>{
    const {id} = req.params;
    await Product.deleteOne({_id:id});
    res.status(201).json({message:"Product deleted!"})
}

const getOneProduct = async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json({product});
}

module.exports={
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getOneProduct
}