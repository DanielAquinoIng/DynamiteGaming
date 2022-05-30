import React, { useState } from "react";
import { Stack, Container, Form, Button} from "react-bootstrap";
import '../css/signin.css';
import {Avatar} from "@material-ui/core";

import firebaseApp from "../components/credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

const auth = getAuth(firebaseApp);


const Logueo = () => {
  const [reset, setReset] = React.useState(false);
  const [logn, setLogn]= React.useState(true);
  const [cEnviado, setCEnviado] = React.useState(false);

  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  const rPassword=()=>{
    setReset(true);
    setLogn(false);
  }
  const loginbool=()=>{
    setLogn(true);
    setReset(false);
    setCEnviado(false);
  }
  const coEnviado=()=>{
    setCEnviado(true)
  }

  function resetPassword(e){
  e.preventDefault();
  const email = e.target.rEmail.value;
  sendPasswordResetEmail(auth, email).then(() => {
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

    if (estaRegistrandose) {
      //si se registra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
    } else {
      // si está iniciando sesión
      await signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  return (
    logn?(
      <Container id="main-container" className="d-grid h-100">
      <Stack gap={3}>
        <Form id="sign-in-form" className="text-center w-100" onSubmit={submitHandler}>
          <Avatar 
          className="bootstrap-logo"
          margin= "theme.spacing(3)"
          backgroundColor= "theme.palette.primary.main"
          ></Avatar>

          <h1 className="fs-3 fw-normal">{estaRegistrandose ? "Regístrate" : "Iniciar Sesión"}</h1>

          <Form.Group className="mb-3 position-relative" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Correo" />
          </Form.Group>

          <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <Button variant="dark" type="submit">
            {estaRegistrandose ? "Regístrate" : "Iniciar Sesión"}
          </Button>
        </Form>

        <Button
          style={{ width: "300px" }}
          variant="secondary"
          onClick={() => setEstaRegistrandose(!estaRegistrandose)}
        >
          {estaRegistrandose
            ? "¿Ya tienes cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </Button>
          
        <a style={{"color": "blue", "text-decoration": "underline","cursor":"pointer"}}
          onClick={rPassword}
        >
          ¿Olvidaste tu contraseña?
        </a>

      </Stack>
    </Container>
    ):
    (
      <Container id="main-container" className="d-grid h-100">
      <Stack gap={1}>
        <Form id="sign-in-form" className="text-center w-100" onSubmit={resetPassword}>
          <Avatar 
          className="bootstrap-logo"
          margin= "theme.spacing(3)"
          backgroundColor= "theme.palette.primary.main"
          ></Avatar>

          <h1 className="fs-3 fw-normal">Recuperar Contraseña</h1>

          <Form.Group className="mb-3 position-relative" controlId="rEmail">
            <Form.Control type="email" placeholder="Correo" />
          </Form.Group>

          {cEnviado ? (<h5>Correo de recuperación enviado verifica tu bandeja de mensajes</h5>):
          (<Button variant="dark" type="submit" onClick={coEnviado}>
            Recuperar
          </Button>)}
      
          <div>
          <a style={{"color": "blue", "text-decoration": "underline","cursor":"pointer"}}
          onClick={loginbool}>
            Volver
          </a>
          </div>
        </Form>
      </Stack>
    </Container>
    )
    
  );
};

export default Logueo;