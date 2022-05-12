import React, { useState } from "react";
import {
  Grid,
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import fondo from "./../assets/images/mine.jpg";
import {
  LockOpenOutlined as LockOutlinedIcon,
  Accessibility,
} from "@material-ui/icons";
import { Alert } from "bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
  container: {
    opacity: "1",
    height: "60%",
    marginTop: theme.spacing(30),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      with: "100%",
      height: "100%",
    },
  },
  div: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const [body, setBody] = useState({
    nickname: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });
  const classes = useStyles();
  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
      const correo = body.email.toString()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.correo){
       } else {
        alert("La dirección de email es incorrecta.");
        setBody({
            email: "",
        })
       }

      if (body.password != body.repassword) {
          setBody({
              body,
              password: "",
              repassword: "",
          })
          alert("Las contraseñas no coinciden");
      }
    console.log(body);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Container
        component={Paper}
        elevation={5}
        maxWidth="xs"
        className={classes.container}
      >
        <div className={classes.div}>
          <Avatar className={classes.avatar}>
            <Accessibility />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <form className={classes.form}>
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="filled"
              label="Nickname"
              name="nickname"
              value={body.nickname}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="filled"
              label="Nombre"
              name="name"
              value={body.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="filled"
              label="Apellido"
              name="lastname"
              value={body.lastname}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="filled"
              type="email"
              label="Correo"
              name="email"
              value={body.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="filled"
              type="password"
              label="Contraseña"
              name="password"
              value={body.password}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="filled"
              type="password"
              label="Contraseña"
              name="repassword"
              value={body.repassword}
              onChange={handleChange}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => onSubmit()}
            >
              Registrase
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default Register;
