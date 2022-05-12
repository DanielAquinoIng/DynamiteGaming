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
import fondo from "./../assets/images/amo.jpg";
import { LockOpenOutlined as LockOutlinedIcon } from "@material-ui/icons";

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
    height: "40%",
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

const Login = () => {
  const [body, setBody] = useState({
    nickname: "",
    password: "",
  });
  const classes = useStyles();
  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicia sesión
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
              type="password"
              margin="normal"
              variant="filled"
              label="Password"
              name="password"
              value={body.password}
              onChange={handleChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => onSubmit()}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default Login;
