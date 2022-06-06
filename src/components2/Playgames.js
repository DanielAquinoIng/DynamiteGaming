import React from "react";
import Juego from "./Juego";
import ConsultaJuegos from "../global/consultaJuegos";
import Grid from '@mui/material/Grid';
import '../css/plataforma.css';

export const Playgames = () => {
  const juegos = ConsultaJuegos("PlayGames");

  return (
    <div  className="fondoplay">
      <Grid
        container
        justify="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        textAlign="center"
        className="Grid"
      >
        {juegos.map((juego) => (
          <Juego juego={juego} />
        ))}
      </Grid>
    </div>
  );
};

export default Playgames;
