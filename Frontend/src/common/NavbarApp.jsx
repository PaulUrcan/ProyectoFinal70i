import React, { useContext, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/react.svg';
import { NavLink, Navigate } from 'react-router-dom';
import UserContext from '../components/ContextUser';
import Login from '../views/Login'; // Importa el componente Login

const NavbarApp = ({ handleLoginModal }) => {
  const { user } = useContext(UserContext);
  const logout = () => {
    setUser({
      "id": 0,
      "user": "",
      "password": "",
      "email":"",
      "admin":false
    });
  };

  const [showLoginModal, setShowLoginModal] = useState(false); // Estado para controlar la visibilidad del modal

  const handleShowLoginModal = () => setShowLoginModal(true); // Función para mostrar el modal
  const handleCloseLoginModal = () => setShowLoginModal(false); // Función para cerrar el modal

  return (
    <Navbar className="d-flex justify-content-center text-white" bg="#0077b6">
      <Nav className="me-auto">
        <NavLink className="nav-link" to="/">
          Inicio
        </NavLink>
        <NavLink className="nav-link" to="/nosotros">
          Nosotros
        </NavLink>
        <Button className="nav-link" onClick={handleShowLoginModal}>Ingresar</Button> {/* Botón para mostrar el modal de login */}
        
        {user.admin ? (
          <>
            <NavLink className="nav-link" to="/admin">
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

      {/* Modal de login */}
      <Login show={showLoginModal} handleClose={handleCloseLoginModal} />
    </Navbar>
  );
};

export default NavbarApp;
