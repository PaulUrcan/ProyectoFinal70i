import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ResetPasswordForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar el formulario de cambio de contraseña
    // Llama a la función onSubmit pasada como prop con los datos del formulario
    // Ejemplo: onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNewPassword">
        <Form.Label>Nueva Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Nueva contraseña" />
      </Form.Group>
      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Confirmar contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Cambiar Contraseña
      </Button>
    </Form>
  );
};

export default ResetPasswordForm;
