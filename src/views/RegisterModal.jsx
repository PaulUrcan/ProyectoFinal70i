import React from "react";
import { Button, Form, FormControl, FormGroup, Modal } from "react-bootstrap";

const RegisterModal = ({ show, handleClose }) => {
  const handleRegister = () => {
    // Lógica para registrar al usuario
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <Form.Label>Email</Form.Label>
            <FormControl type="email" placeholder="Ingrese su correo electrónico" />
          </FormGroup>
          <FormGroup>
            <Form.Label>Contraseña</Form.Label>
            <FormControl type="password" placeholder="Ingrese su contraseña" />
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <a href="/" className="btn btn-secondary">Iniciar Sesión</a>
        <Button variant="primary" onClick={handleRegister}>
          Registrarse
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
