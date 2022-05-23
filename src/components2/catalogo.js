import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Grid,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import fondo from "./../assets/images/amo.jpg";

import ElderRing from '../assets/images/ElderRing.jpg';
import FarCry from '../assets/images/FarCry.jpg';
import GhostOfTsushima from '../assets/images/GhostOfTsushima.jpg';
import MonosChinos from '../assets/images/MonosChinos.jpg';
import Wonderlands from '../assets/images/Wonderlands.jpg';
import COD from '../assets/images/COD.jpg';
import BarraBusqueda from "./barraBusqueda";


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
        </Grid>
        <BarraBusqueda/>
        <container>
          <div style={{ textAlign: "center" }}>
            <img
              src={ElderRing}
              style={{ width: "384px", height: "480px", margin: "50px" }}
              onMouseEnter={{ fontSize: "130%" }}
              className="zoom"
              alt=""
            />
            <img
              src={FarCry}
              style={{ width: "384px", height: "480px", margin: "50px" }}
              onMouseEnter={{ fontSize: "130%" }}
              className="zoom"
              alt=""
            />
            <img
              src={GhostOfTsushima}
              style={{ width: "384px", height: "480px", margin: "50px" }}
              onMouseEnter={{ fontSize: "130%" }}
              className="zoom"
              alt=""
            />
          </div>
          <div
            style={{ textAlign: "center" }}
            onMouseEnter={{ fontSize: "130%" }}
          >
            <img
              src={MonosChinos}
              style={{ width: "384px", height: "480px", margin: "50px" }}
              onMouseEnter={{ fontSize: "130%" }}
              className="zoom"
              alt=""
            />
            <img
              src={Wonderlands}
              style={{ width: "384px", height: "480px", margin: "50px" }}
              onMouseEnter={{ fontSize: "130%" }}
              className="zoom"
              alt=""
            />
            <img
              src={COD}
              style={{ width: "384px", height: "480px", margin: "50px" }}
              onMouseEnter={{ fontSize: "130%" }}
              className="zoom"
              alt=""
            />
          </div>
        </container>
      </div>
    )
  );
};
export default Catalogo;
