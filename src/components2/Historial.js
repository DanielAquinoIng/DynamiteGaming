import React from "react";
import BarraBusqueda from "./barraBusqueda";
import "../css/historial.css";
import nintendo from "../assets/nintendo.jpeg";
import Swal from "sweetalert2";

const Historial = () => {
  return (
    <div>
      <h1>Historial de compras</h1>
      <div className="card-wrap">
        <article className="card">
          <header className="header-card">
            <p>
              <b>28 de mayo</b>
            </p>
          </header>
          <footer className="footer-card">
            <div className="imagen-card">
              <img
                src="https://cdn-prod.scalefast.com/public/assets/user/122595/image/cdb3282186e2abc6d0b0f610e9ec39c2.png"
                alt="Elden ring"
              />
            </div>
            <div className="datos-card">
              <h4>Elden Ring</h4>
              <p className="precio">
                <b>$1,500.00</b>
              </p>
              <p>
                ELDEN RING, desarrollado por FromSoftware, Inc. y BANDAI NAMCO
                Entertainment Inc. es un RPG de fantasía, acción y aventura
                ambientado en un mundo creado por Hidetaka Miyazaki y George R.
                R. Martin. El peligro y el descubrimiento están en cada giro del
                juego más grande de FromSoftware hasta la fecha.
              </p>
              <p>AASAS343434JKDJS3434</p>
            </div>
          </footer>
        </article>
        <article className="card">
          <header className="header-card">
            <p>
              <b>27 de mayo</b>
            </p>
          </header>
          <footer className="footer-card">
            <div className="imagen-card">
              <img
                src="https://media.vandal.net/m/86451/spiderman-miles-morales-20207921133921_1.jpg"
                alt="Spiderman Miles Morales"
              />
            </div>
            <div className="datos-card">
              <h4>Spiderman Miles Morales</h4>
              <p className="precio">
                <b>$1,200.00</b>
              </p>
              <p>
                En la última aventura del universo de Spider-Man de Marvel, el
                adolescente Miles Morales intenta ajustarse a su nuevo hogar
                mientras que sigue los pasos de su mentor, Peter Parker, para
                convertirse en el nuevo Spider-Man.
              </p>
              <p>AAAA3343444JFFJS3434</p>
            </div>
          </footer>
        </article>
        <article className="card">
          <header className="header-card">
            <p>
              <b>26 de mayo</b>
            </p>
          </header>
          <footer className="footer-card">
            <div className="imagen-card">
              <img
                src="https://s2.gaming-cdn.com/images/products/6760/orig-fallback-v1/dragon-ball-z-kakarot-xbox-one-xbox-series-x-s-xbox-one-xbox-series-x-s-juego-microsoft-store-europe-cover.jpg"
                alt="dragon ball z kakarot"
              />
            </div>
            <div className="datos-card">
              <h4>Dragon Ball Z: Kakarot</h4>
              <p className="precio">
                <b>$1,500.00</b>
              </p>
              <p>
                Disfruta de la historia de DRAGON BALL Z, desde acontecimientos
                épicos hasta ligeras misiones paralelas divertidas, incluyendo
                momentos de la historia jamás vistos que responden a algunas
                preguntas candentes de la tradición de DRAGON BALL por primera
                vez.
              </p>
              <p>H14JTSK78DKSJS78SMSU</p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Historial;
