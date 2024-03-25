const User = require("../models/user");
const bcryptjs = require("bcrypt");
const { generateJwt } = require("../helpers/generateToken")

const login = async(req=request,res=response)=>{
    const {mail,password}=req.body;
    try {
        const user = await User.findOne({mail})
        if(!user){
            return res.json({
                message:"Mail or password are incorrect!"
            });
        }
        if(!user.status){
            return res.json({
                message:"Mail or password are incorrect | Inactive user"
            });
        }
        let validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.json({
                message:"Mail or password are incorrect"
            });
        }
        const token = await generateJwt(user.uid);
        res.json({
            message:"Login Complete!",
            user,
            token
        });
    } catch (error) {
        res.status(500).json({
            message:"Contact the admin"
        });
    }
}

module.exports={login}; 