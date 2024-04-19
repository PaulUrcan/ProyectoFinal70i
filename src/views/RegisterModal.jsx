import React, { useState } from "react";
import { Button, Form, FormControl, FormGroup, Modal } from "react-bootstrap";
import {addUser} from "../utils"

const RegisterModal = ({ show, handleClose }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleRegister = async () => {
    const usuario = {
      name: nombre,
      mail: email,
      password: contraseña
    };

    const registrado = await addUser(usuario);

    if (registrado) {
      
      handleClose();
    } else {
      
      alert("Error al registrar usuario");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <Form.Label>Nombre</Form.Label>
            <FormControl
              type="text"
              placeholder="Ingrese su nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Email</Form.Label>
            <FormControl
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Contraseña</Form.Label>
            <FormControl
              type="password"
              placeholder="Ingrese su contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <a href="/" className="btn btn-secondary">
          Iniciar Sesión
        </a>
        <Button variant="primary" onClick={handleRegister}>
          Registrarse
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
