import React, { useState } from "react";
import '../css/signin.css';
// import {Avatar} from "@material-ui/core";

//dependencias del login
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from "sweetalert2";

import firebaseApp from "../components/credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Dynamite Software
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const auth = getAuth(firebaseApp);


const Logueo = () => {
  const [reset, setReset] = React.useState(false);
  const [logn, setLogn]= React.useState(true);
  const [cEnviado, setCEnviado] = React.useState(false);
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  const rPassword=()=>{
    // const { value: email } = await Swal.fire({
    //   title: 'Input email address',
    //   input: 'email',
    //   inputLabel: 'Your email address',
    //   inputPlaceholder: 'Enter your email address'
    // })
    
    // if (email) {
    //   Swal.fire(`Entered email: ${email}`)
    // }
  }
  const loginbool=()=>{
    setLogn(true);
    setReset(false);
    setCEnviado(false);
    setEstaRegistrandose(false)
  }
  const coEnviado=()=>{
    setCEnviado(true)
  }
  const seRegistra = () =>{
    setEstaRegistrandose(true)
    setLogn(false);
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

  async function submitHandler(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    for (const element of data) {
      console.log(`I found this ${element}`)
  }

    if (estaRegistrandose) {
            //si se registra
      const correo = data.get('email');
      const contra =data.get('password');
      const reContra = data.get('rePassword')
      const nombre = data.get('firstName')
      const apellido = data.get('lastName')

      if (contra != reContra) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Parece ser que tus constraseñas no son iguales, asegurate de escribir la misma contraseña:)',
        })
      } 
      else{
        const usuario = await createUserWithEmailAndPassword(
          auth,
          correo,
          contra
        );
      }

    } else {
            // si está iniciando sesión
      const correo = data.get('email');
      const contra =data.get('password');

      await signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  const theme = createTheme();

  return logn ? (
    <>
      {reset ? (
        Swal.fire({
          title: 'Hola aqui va el recuperar contraseña',
          width: 600,
          padding: '3em',
          color: '#716add',
          background: '#fff url(/src/assets/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/src/assets/images/runingmario.gif")
            left top
            no-repeat
          `
        })
      ) : (
        
        <ThemeProvider theme={theme}>
          
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={submitHandler}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  "Iniciar Sesión"
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link onClick={rPassword} variant="body2">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link onClick={seRegistra} variant="body2">
                      "¿No tienes cuenta? Regístrate"
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      )}
    </>
  ) : (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={submitHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                type="email"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrnico"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="rePassword"
                  label="Repite la contraseña"
                  type="password"
                  id="rePassword"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={loginbool} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Logueo;