import React from 'react'
import MyCard from "../common/MyCard";
import Button from 'react-bootstrap/Button';
import {useContext} from 'react'
import ContextUser from '../components/ContextUser';
import { NavLink} from "react-router-dom";
const Products = ({products, setProducts}) => {
    const {user} = useContext(ContextUser)
  return (
    <main className='main d-flex justify-content-around align-items-center flex-wrap'>
      {user.admin?
      <NavLink className='nav-link' to='/admin/agregarProducto'>
      <Button variant="success">
      <a href="/admin/agregarProducto" style={{color:'white'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
</svg>
      </a>
        </Button>
      </NavLink>
      
        :''}
        {products.map((product,i)=>{
            return <MyCard key={i} product={product} setProducts={setProducts}/>
        })}
    </main>
  )
}

export default Products