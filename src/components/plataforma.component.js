
import React, { Component } from "react";
import nintendo from '../assets/nintendo.jpeg';
import playstation from '../assets/playstation.jpeg';
import steam from '../assets/steam.jpeg';
import xgod from '../assets/xgod.jpeg';
import { Link } from "react-router-dom";
import {Row, Col} from 'reactstrap';

export default class Plataform extends Component {
  render() {
    return (
      <div className="plataforma-selection">
        <br/>
        {/* <Helmet>
        <style>{'body { background-color: red; }'}</style>
      </Helmet> */}
        <p style={{ textAlign: "center", color: "white", fontSize: "30px"}}>
          <strong>SELECCIONA LA PLATAFORMA DE TU PREFERENCIA</strong>
        </p>
          <Link
            type="submit"
            to="../sign-in"
            style={{ margin: 10, cursor: "pointer", boxShadow: "4px 14px 80px black", borderRadius: 25}}
            className="zoom"
            // onMouseEnter={{fontSize:"150%"}}
          >
            <img
              className="img-fluid"
              src={nintendo}
              alt="Nintendo"
              style={{borderRadius: 25}}
            // width={"320px"}
            // height={"180px"}
            />
          </Link>
          <Link
            type="submit"
            to="../sign-in"
            style={{ margin: 10, cursor: "pointer", boxShadow: "4px 14px 80px black", borderRadius: 25 }}
            className="zoom"
          >
            <img
              className="img-fluid"
              src={playstation}
              alt="Playstation"
              style={{borderRadius: 25}}
            // width={"320px"}
            // height={"180px"}
            />
          </Link>
          {/* </div>
      <div className='row'> */}
          <Link
            type="submit"
            to="../sign-in"
            style={{ margin: 10, cursor: "pointer", boxShadow: "4px 14px 80px black", borderRadius: 25 }}
            className="zoom"
          >
            <img
              className="img-fluid"
              src={steam}
              alt="Steam"
              style={{borderRadius: 25}}
            // width={"320px"}
            // height={"180px"}
            />
          </Link>
          <Link
            type="submit"
            to="../sign-in"
            style={{ margin: 10, cursor: "pointer", boxShadow: "4px 14px 80px black", borderRadius: 25 }}
            className="zoom"
          >
            <img
              className="img-fluid"
              src={xgod}
              alt="Xbox"
              style={{borderRadius: 25}}
            // width={"320px"}
            // height={"180px"}
            />
          </Link>
        </div>
    );
  }
}

