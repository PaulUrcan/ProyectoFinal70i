const {Router} = require("express");
const router = Router();
const {getProducts,addProduct,updateProduct,deleteProduct, getOneProduct} = require("../controllers/productsController");

router.get("/", getProducts);

router.post("/createProduct", addProduct);

router.put("/updateProduct/:id", updateProduct);

router.delete("/deleteProduct/:id", deleteProduct);

router.get("/getOneProduct/:id", getOneProduct);

module.exports=router;