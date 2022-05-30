import React from "react";
import { Juego } from "./Juego";
import ConsultaJuegos from "../global/consultaJuegos";

export const Steamgames = () => {
  const juegos = ConsultaJuegos("PcGames");

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
export default Steamgames;
