import React, { useContext } from "react";
import { JuegosContext } from "../global/juegosContext";
import { Juego } from "./Juego";

export const Nintendogames = () => {
    const { juegos } = useContext(JuegosContext);


    return(
        <>
      <div>
        {juegos.map((juego) => (
          <Juego juego={juego}/>
        ))}
      </div>
    </>
    )
}

export default Nintendogames;