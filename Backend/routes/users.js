const {Router} = require("express");
const {check} = require("express-validator");
const {validateCamp} = require("../middlewares/campValidator")
const router = Router();
const { usersGet, userGet, userDelete, userCreate, userUpdate } = require("../controllers/usersController");
const {mailExists} = require("../helpers/dbValidator");


router.get("/", usersGet)

router.get("/id/:id", userGet)

router.post("/createUser", [
    check("name", "Name is mandatory!").notEmpty(),
    check("password", "Password must be longer than 6 digits!").isLength({min:6}),
    check("mail", "Not a valid email!").isEmail(),
    check("mail").custom(mailExists),
    validateCamp
], userCreate)

router.put("/updateUser/id/:id", userUpdate)

router.delete("/id/:id", userDelete)

module.exports=router;  