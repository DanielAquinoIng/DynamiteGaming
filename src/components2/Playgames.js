import React, { useContext } from "react";
import { JuegosContext } from "../global/juegosContext";

export const Playgames = () => {
  const { juegos } = useContext(JuegosContext);

  return (
    <>
      <div>
        {juegos.map((juego) => (
          <div className="juego-card" key={juego.IdJuego}>
            <div className="juego-img">
              <img
                src={juego.ImagenJuego}
                alt="No se encontro la imagen"
                style={{ width: "384px", height: "480px", margin: "50px" }}
                onMouseEnter={{ fontSize: "130%" }}
                className="zoom"
              />
            </div>
            <div className="juego-name">{juego.NombreJuego}</div>
            <div className="juego-price">$ {juego.PrecioJuego}.00</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Playgames;
