const User = require("../models/user")

// validar mail

const mailExists = async(mail) =>{
    const mailDoesExist = await User.findOne({mail:mail});
    if (mailDoesExist) {
        throw new Error(`The email ${mail} already exists!`)
    }
}

module.exports={
    mailExists
}