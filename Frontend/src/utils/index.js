let URLproducts = import.meta.env.VITE_ENV_URL_PRODUCTS;
let URLproductsLocal = import.meta.env.VITE_ENV_URL_PRODUCTS_LOCAL
let URLuser =import.meta.env.VITE_ENV_URL_USERS;

import axios from 'axios';
export const getProducts=async()=>{
    try {
        let products= await axios.get(URLproducts);
        if (products.status===200) {
            return products.data.products
            
        }else{
            return []
        }
        

    } catch (error) {
        console.log(error);
        return []
    }
}
export const getUsers=async()=>{
    try {
        let users= await axios.get(URLuser);
        if (users.status===200) {
            return users.data.users
            
        }else{
            return []
        }

    } catch (error) {
        console.log(error);
        return []
    }
}

export const addUser=async(obj)=>{
    console.log(obj);
    try {
       let add= await axios.post(URLuser+"/createUser",obj);
       if (add.status==201) {

            return true
       }else{
        alert("estamos en index")
       }


    } catch (error) {
        console.log(error);
        return false
    }

}

export const addProduct=async(obj)=>{
    console.log(obj);
    try {
       let add= await axios.post(URLproducts+"/createProduct",obj);
       if (add.status==201) {
        console.log(add)
            return true
       }else{
        alert("estamos en index")
       }


    } catch (error) {
        console.log(error);
        return false
    }

}
export const getOneProduct=async(id)=>{
    try {
        let product= await axios.get(`${URLproducts}/getOneProduct/${id}`);
        if (product.status===200) {
            return product.data.product
            
        }else{
            return null
        }

    } catch (error) {
       
        return null
    }
}
export const updateProduct=async(id,obj)=>{
    try {
        let product= await axios.put(`${URLproducts}/updateProduct/${id}`,obj)
        if (product.status===201) {
            return product.data.productUpdate
            
        }else{
            return null
        }
        

    } catch (error) {
       
        return null
    }
}
export const deleteProduct=async(id)=>{
    try {
        let product= await axios.delete(`${URLproducts}/deleteProduct/${id}`)
        // if (product.status===201) {
        //     console.log(product)
        //     return product.data
            
        // }else{
        //     return null
        // }
        console.log(product)
        console.log(id)
    } catch (error) {
       
        return null
    }
}

// addUser({name:"Juan", mail:"Juan@gmail.com", password:"password", img:"url", role:"admin", status:"true"})
// .then((result)=>{
//     return result.json()
// }).then((data)=>{console.log(data)})