import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import icono from "../assets/images/icono.png";
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
    height: "30%",
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

export const Catalogo = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <Grid container component="main" className={useStyles.root}>
          <CssBaseline />
          <Container
            component={Paper}
            elevation={5}
            maxWidth="xs"
            className={useStyles.container}
          >
            <div className={useStyles.div}>
              <img
                src={user.picture}
                alt={user.name}
                className={useStyles.container}
              />
              <Typography component="h1" variant="h5">
                {user.name}
              </Typography>
              <Typography component="h3" variant="h5">
                Email: {user.email}
              </Typography>
              <form className={useStyles.form}></form>
            </div>
          </Container>
        </Grid>
        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p> */}
      </div>
    )
  );
};
export default Catalogo;
