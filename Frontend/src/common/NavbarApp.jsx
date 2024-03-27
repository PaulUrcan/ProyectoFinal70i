import {useContext, useEffect} from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import logo from '/logo.svg'
import { Link, NavLink} from "react-router-dom";
import UserContext from '../components/ContextUser';

const NavbarApp = () => {
  const {user,setUser}=useContext(UserContext);
  const logout=()=>{
    setUser({
      "id": 0,
      "user": "",
      "password": "",
      "email":"",
      "admin":false
    });
  }

  return (
    <Navbar className='d-flex justify-content-center text-white' bg="#0077b6" >
        <Nav className='me-auto'>
            <Link className='navbar-branch' to="/">
                <img src={logo} alt="" />
            </Link>
            <NavLink className='nav-link' to='/'>
            Inicio
            </NavLink>
            <NavLink className='nav-link' to='/nosotros'>
            Nosotros
            </NavLink>
            <NavLink className='nav-link' to='/ingresar'>
            Ingresar
            </NavLink>
            {user.admin?<>
              <NavLink className='nav-link' to='/admin'>
            Administrador
            </NavLink>
            <NavLink className='nav-link' to='/admin/agregarProducto'>
            Agregar Producto
            </NavLink>
            <NavLink className='nav-link' to='/admin/productos'>
            Administrar productos
            </NavLink>
            <NavLink className='nav-link' onClick={logout}>
            Salir
            </NavLink>
            </>:""}
        </Nav>

    </Navbar>
  )
}

export default NavbarApp