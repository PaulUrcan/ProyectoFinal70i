
import React, { useContext, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/react.svg';
import { NavLink, Navigate } from 'react-router-dom';
import {useContext, useEffect} from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import { Link, NavLink} from "react-router-dom";
import UserContext from '../components/ContextUser';
import Login from '../views/Login'; 

const NavbarApp = ({ handleLoginModal }) => {
  const { user, setUser } = useContext(UserContext);
  const logout = () => {
    setUser({
      "id": 0,
      "user": "",
      "password": "",
      "email":"",
      "admin":false
    });
  };

  const [showLoginModal, setShowLoginModal] = useState(false); 

  const handleShowLoginModal = () => setShowLoginModal(true); 
  const handleCloseLoginModal = () => setShowLoginModal(false);

  return (
    <Navbar className="d-flex justify-content-center text-white" bg="#0077b6">
      <Nav className="me-auto">
        <NavLink className="nav-link" to="/">
          Inicio
        </NavLink>
        <NavLink className="nav-link" to="/nosotros">
          Nosotros
        </NavLink>
        <Button className="nav-link" onClick={handleShowLoginModal}>Ingresar</Button>
        
        {user.admin ? (
          <>
            <NavLink className="nav-link" to="/admin">
              Administrador
    <Navbar className='d-flex justify-content-center text-white' bg="#0077b6" >
        <Nav className='me-auto'>
            <Link className='navbar-branch' to="/">
                <img src="logo.png" alt="" width={50}/>
            </Link>
            <NavLink className='nav-link' to='/'>
            Inicio
            </NavLink>
            <NavLink className='nav-link' to='/ingresar'>
            Ingresar
            </NavLink>
            {user.admin?<>
              <NavLink className='nav-link' to='/admin'>
            Administrador
            </NavLink>
            <NavLink className="nav-link" to="/admin/agregarProducto">
              Agregar Producto
            </NavLink>
            <NavLink className="nav-link" to="/admin/productos">
              Administrar productos
            </NavLink>
            <NavLink className="nav-link" onClick={logout}>
              Salir
            </NavLink>
          </>
        ) : (
          ''
        )}
      </Nav>

      
      <Login show={showLoginModal} handleClose={handleCloseLoginModal} />
    </Navbar>
  );
};

export default NavbarApp;
