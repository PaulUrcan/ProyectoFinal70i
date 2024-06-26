import React, { useContext, useState } from "react";
import { Button, Form, FormControl, FormGroup, Modal, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import bcrypt from "bcryptjs-react";
import UserContext from "../components/ContextUser";
import { getUsers } from "../utils";
import "./Login.css";
import loguito from "../assets/imagenLogin.png";
import RegisterModal from "./RegisterModal"; 

const Login = ({ show, handleClose }) => {
  const { setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false); 

  const login = async (user) => {
    let users = await getUsers();
    let objUser = {};

    users.forEach((myUser) => {
      if (
        myUser.mail === user.mail &&
        bcrypt.compareSync(user.password, myUser.password)
      ) {
        let admin = myUser.role === "admin";
        objUser.theme = "light";
        objUser.colorText = "dark";
        objUser.name = myUser.name;
        objUser.mail = myUser.mail;
        objUser.password = myUser.password;
        objUser.img = myUser.img;
        objUser.admin = admin;
        objUser.status = myUser.status;
        objUser.uid = myUser.uid;
      }
    });

    if (objUser.admin !== undefined) {
      setUser(objUser);
      handleClose();
    }
  };

  const handleForgotPassword = () => {
    setShowResetPasswordForm(true);
  };

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
    handleClose();
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title className="custom-modal-title">
            Iniciar Sesión
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} order={2}>
              <Form onSubmit={handleSubmit(login)} className="custom-form">
                <FormGroup>
                  <Form.Label className="custom-form-label">Email</Form.Label>
                  <FormControl
                    type="text"
                    {...register("mail", {
                      required: "Este campo es obligatorio",
                    })}
                    className="custom-form-control"
                  />
                  <Form.Text>{errors.mail?.message}</Form.Text>
                </FormGroup>
                <FormGroup>
                  <Form.Label className="custom-form-label">
                    Contraseña
                  </Form.Label>
                  <FormControl
                    type="password"
                    {...register("password", {
                      required: "Este campo es obligatorio",
                    })}
                    className="custom-form-control"
                  />
                  <Form.Text>{errors.password?.message}</Form.Text>
                </FormGroup>
                <FormGroup>
                  <Button
                    variant="primary"
                    type="submit"
                    className="custom-modal-button"
                  >
                    Ingresar
                  </Button>
                </FormGroup>
              </Form>
            </Col>
            <Col md={6} order={1} className="d-none d-md-block">
              <img src={loguito} alt="Imagen" className="img-fluid" />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={handleShowRegisterModal}>
            Registrarse
          </Button>
          <Button
            className="link"
            variant="link"
            onClick={handleForgotPassword}
          >
            ¿Olvidaste tu contraseña?
          </Button>
          {showResetPasswordForm && <ResetPasswordForm />}
        </Modal.Footer>
      </Modal>
      <RegisterModal show={showRegisterModal} handleClose={handleCloseRegisterModal} />
    </>
  );
};

export default Login;
