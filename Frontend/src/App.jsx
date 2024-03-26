import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './common/Footer'
import NavbarApp from './common/NavbarApp';
import Home from './views/Home'
import ErrorScreen from './views/ErrorScreen';
import About from './views/About'
import {getProducts} from './utils'
import { useEffect, useState } from 'react';
import RoutesPrivates from './routes/RoutesPrivates';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from './views/AddProduct'
import Admin from './views/Admin';
import Login from './views/Login';
import ContextUser from './components/ContextUser';
import Products from './views/Products';
import DetailProduct from './views/DetailProduct';
import UpdateProduct from './views/UpdateProduct'
function App() {
  const [products,setProducts]=useState([]);
  const [user,setUser]=useState({
    "id": 0,
    "user": "",
    "password": "",
    "email":"",
    "admin":false,
    "theme":"light",
    "colorText":"dark"
  })

  const getData=async()=>{
    let data= await getProducts();
    setProducts(data);
  }
  useEffect(() => {
    // Al momento en que se monta el componente
    // setProducts()
    getData()

    
  }, [])
 
  
  return (
    <ContextUser.Provider value={{user,setUser}}>
      <BrowserRouter>
    <NavbarApp admin={user.admin}/>
    <Routes>
        <Route  path='/' element={<Products products={products}/>}/>
       <Route path='/admin' element={<RoutesPrivates />}> 
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/admin/agregarProducto' element={<AddProduct setProducts={setProducts}/>}/>
            <Route path='/admin/productos' element={<Products products={products} setProducts={setProducts}/>}/>
            <Route path='/admin/detalleProducto/:id' element={<DetailProduct/>}/>
            <Route path='/admin/modificarProducto/:id' element={<UpdateProduct products={products} setProducts={setProducts}/>}/>
        </Route> 
        <Route path='/nosotros' element={<About/>}/>
        {/* Enviar una función como props */}
        <Route path='/ingresar' element={<Login />}/>
        <Route path='/*' element={<ErrorScreen/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </ContextUser.Provider>
    
  )
}

export default App