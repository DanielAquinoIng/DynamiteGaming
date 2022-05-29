import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import fondo from "./../assets/images/amo.jpg";

import ElderRing from "../assets/images/ElderRing.jpg";
import FarCry from "../assets/images/FarCry.jpg";
import GhostOfTsushima from "../assets/images/GhostOfTsushima.jpg";
import MonosChinos from "../assets/images/MonosChinos.jpg";
import Wonderlands from "../assets/images/Wonderlands.jpg";
import COD from "../assets/images/COD.jpg";

export const Xboxgames = () => {
  return (
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
      <div style={{ textAlign: "center" }} onMouseEnter={{ fontSize: "130%" }}>
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
  );
};
export default Xboxgames;
