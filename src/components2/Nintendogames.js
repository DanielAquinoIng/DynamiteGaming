import React from "react";
import  Juego from "./Juego";
import ConsultaJuegos from "../global/consultaJuegos";

export const Nintendogames = () => {
  const juegos = ConsultaJuegos("NintendoGames");

  return (
    <>
      <div>
        {juegos.map((juego) => (
          <Juego juego={juego} />
        ))}
      </div>
    </>
  );
};

export default Nintendogames;
