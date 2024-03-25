const {Router} = require("express");
const router = Router();
const { usersGet, userGet, userDelete, userCreate, userUpdate } = require("../controllers/usersController")

router.get("/", usersGet)

router.get("/id/:id", userGet)

router.post("/createUser", userCreate)

router.put("/updateUser/id/:id", userUpdate)

router.delete("/id/:id", userDelete)

module.exports=router;  