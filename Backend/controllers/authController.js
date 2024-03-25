const User = require("../models/user");
const bcryptjs = require("bcrypt");

const login = async(req=request,res=response)=>{
    const {mail,password}=req.body;
    try {
        const user = await User.findOne({mail})
        if(!user){
            res.status(400).json({
                message:"Mail or password are incorrect!"
            })
        }
        if(!user.status){
            res.status(400).json({
                message:"Mail or password are incorrect | Inactive user"
            })
        }
        if (!bcrypt.compareSync(password, user.password)) {
            res.status(400).json({
                message:"Mail or password are incorrect!"
            })
        }
        res.json({
            message:"Login Complete!",
            user
        });
    } catch (error) {
        res.status(500).json({
            message:"Contact the admin"
        });
    }
}

module.exports={login}; 