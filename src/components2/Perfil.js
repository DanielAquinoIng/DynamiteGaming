import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  CssBaseline,
} from "@mui/material";
import fondo from "./../assets/images/mine.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { EmojiPeople } from "@material-ui/icons";

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "110vh",
  },
  container: {
    // backgroundColor: "black",
    opacity: "1",
    height: "70%",
    marginTop: theme.spacing(25),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      with: "100%",
      height: "100%",
    },
  },
  div: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    backgroundColor: "white",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Perfil = () => {
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
    const correo = body.email.toString();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.correo) {
    } else {
      // alert("La dirección de email es incorrecta.");
      // <Stack>
      //   <Alert variant="filled" severity="error">
      //     This is an error alert — check it out!
      //   </Alert>
      // </Stack>;
      setBody({
        email: "",
      });
    }
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
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="../assets/images/amo.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Stack>
          <Typography component="h1" variant="h5">
            Perfil
          </Typography>
          <form className={classes.form}>
            <TextField
              disabled
              fullWidth
              autoFocus
              color="primary"
              margin="dense"
              variant="filled"
              label="Nickname"
              placeholder="Escribe tu Nick:)"
              name="nickname"
              value={body.nickname}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              disabled
              autoFocus
              color="primary"
              margin="dense"
              variant="filled"
              placeholder="Bruce 'El venganzas'"
              label="Nombre"
              name="name"
              value={body.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              disabled
              autoFocus
              color="primary"
              margin="dense"
              variant="filled"
              label="Apellido"
              placeholder="Wayne"
              name="lastname"
              value={body.lastname}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              disabled
              autoFocus
              color="primary"
              margin="dense"
              variant="filled"
              type="email"
              label="Correo"
              placeholder="Nombrecool@correo.com"
              name="email"
              value={body.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              disabled
              autoFocus
              color="primary"
              margin="dense"
              variant="filled"
              type="password"
              label="Contraseña"
              placeholder="1234Batman"
              name="password"
              value={body.password}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              disabled
              autoFocus
              color="primary"
              margin="dense"
              variant="filled"
              type="password"
              label="Confirmar contraseña"
              placeholder="Repite tu contraseña, vamos:)"
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

export default Perfil;
