import React, { Component } from "react";
import nintendo from "../assets/nintendo.jpeg";
import playstation from "../assets/playstation.jpeg";
import steam from "../assets/steam.jpeg";
import xgod from "../assets/xgod.jpeg";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// className="img-fluid"
// src={nintendo}
// alt="Nintendo"
// style={{borderRadius: 25}}
// width={"320px"}
// height={"180px"}

{
  /* <Link
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
</Link> */
}

export default class Plataform extends Component {
  render() {
    return (
      <div>
        <div >
          <Link
            type="submit"
            to="../sign-in"
            style={{
              margin: 0,
              cursor: "pointer",
              boxShadow: "4px 14px 80px black",
              borderRadius: 25,
            }}
            className="zoom"
            onMouseEnter={{ fontSize: "150%" }}
          >
            <img className="i1" src={nintendo} />
          </Link>
        </div>
        <div>
          <Link
            type="submit"
            to="../sign-in"
            style={{
              margin: 0,
              cursor: "pointer",
              boxShadow: "4px 14px 80px black",
              borderRadius: 25,
            }}
            className="zoom"
            onMouseEnter={{ fontSize: "150%" }}
          >
            <img className="i2" src={xgod} />
          </Link>
        </div>
        <div>
          <Link
            type="submit"
            to="../sign-in"
            style={{
              margin: 0,
              cursor: "pointer",
              boxShadow: "4px 14px 80px black",
              borderRadius: 25,
            }}
            className="zoom"
            onMouseEnter={{ fontSize: "150%" }}
          >
            <img className="i3" src={playstation} />
          </Link>
        </div>
        <div>
          <Link
            type="submit"
            to="../sign-in"
            style={{
              margin: 0,
              cursor: "pointer",
              boxShadow: "4px 14px 80px black",
              borderRadius: 25,
            }}
            className="zoom"
            onMouseEnter={{ fontSize: "150%" }}
          >
            <img className="i4" src={steam} />
          </Link>
        </div>
      </div>
    );
  }
}
