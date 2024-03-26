const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config")

class Server{
    constructor(){
        this.app=express();
        this.port=8080;
        this.authPath="/api/auth"
        this.usersPath="/api/users"
        this.productsPath="/api/products"
        this.categoriesPath="/api/categories"
        this.ConnectDb();
        this.middlewares();
        this.routes();
    }
    async ConnectDb(){
        await dbConnection();
    }
    middlewares(){
        // cors
        this.app.use(cors());
        // leer json
        this.app.use(express.json());
        // archivos estaticos
        this.app.use(express.static("public"));   
    }
    routes(){
        this.app.use(this.authPath,require("../routes/auth"))
        this.app.use(this.usersPath,require("../routes/users"))
        this.app.use(this.productsPath,require("../routes/products"))
       /* this.app.use(this.categoriesPath,require("../routes/categories")) */
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Server on ready port:", this.port)
        })
    }
}
module.exports=Server;