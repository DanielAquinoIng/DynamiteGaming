
import React, { Component } from "react";
import nintendo from '../assets/nintendo.jpeg';
import playstation from '../assets/playstation.jpeg';
import steam from '../assets/steam.jpeg';
import xgod from '../assets/xgod.jpeg';

export default class Plataform extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#101648" }}>
        {/* <Helmet>
        <style>{'body { background-color: red; }'}</style>
      </Helmet> */}
        <p style={{ textAlign: "center", color: "white", fontSize: "30px" }}>
          POR FAVOR SELECCIONA LA PLATAFORMA DE TU PREFERENCIA
        </p>
        <br></br>
        <br></br>
        <div className="row">
          <img
            src={nintendo}
            style={{ margin: 10, cursor: "pointer" }}
            alt="Nintendo"
            width={"455"}
            height={"255px"}
          />
          <img
            src={playstation}
            style={{ margin: 10, cursor: "pointer" }}
            alt="Playstation"
            width={"455"}
            height={"255px"}
          />
          {/* </div>
      <div className='row'> */}
          <img
            src={steam}
            style={{ margin: 10, cursor: "pointer" }}
            alt="Steam"
            width={"455px"}
            height={"255px"}
          />
          <img
            src={xgod}
            style={{ margin: 10, cursor: "pointer" }}
            alt="Xbox"
            width={"455px"}
            height={"255px"}
          />
        </div>
      </div>
    );
  }
}

