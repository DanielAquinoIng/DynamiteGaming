import React from "react";
import { Juego } from "./Juego";
import ConsultaJuegos from "../global/consultaJuegos";

export const Xboxgames = () => {
  const juegos = ConsultaJuegos("XboxGames");

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
export default Xboxgames;
