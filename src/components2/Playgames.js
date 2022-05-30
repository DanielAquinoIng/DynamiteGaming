import React from "react";
import { Juego } from "./Juego";
import ConsultaJuegos from "../global/consultaJuegos";

export const Playgames = () => {
  const juegos = ConsultaJuegos("PlayGames");

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

export default Playgames;
