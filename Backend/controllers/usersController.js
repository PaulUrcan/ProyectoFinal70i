const {request, response} = require("express");
const User = require("../models/user")
const bcryptjs = require("bcrypt");

const usersGet = async (req=request,res=response) => {
    let users = await User.find();
    res.json({users})
}

const userGet = async (req,res) => {
    let miid = req.query.id;
    res.send(miid)
}

const userCreate = async(req=request,res=response) => {
    let {name, mail, password, img, role, status} = req.body;
    const user = new User({name, mail, password:bcryptjs.hashSync(password,10), img, role, status});
    await user.save();
    res.status(201).json({user, message:"Usuario creado correctamente"});
}

const userUpdate = async(req=request,res=response) =>{
    let id = req.params.id;
    let resto = req.body
    const user = await User.findByIdAndUpdate(id,resto,{new:true});
    res.json({user, message:"Usuario creado correctamente"})
}

const userDelete = async function(req=request,res=response) { 
    let miid = req.params.id;
    const user = await User.findById(miid);
    if (!user.status) {
    return res.json({message:"El usuario ya esta inactivo"});
    }
    const userInactive = await User.findByIdAndUpdate(miid,{status:false},{new:true})
    res.json({message:"Usuario inactivo",data:userInactive})
}

module.exports={
    usersGet,
    userGet,
    userCreate,
    userUpdate,
    userDelete
}