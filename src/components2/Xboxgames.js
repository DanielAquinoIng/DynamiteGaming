// import React from "react";
import Juego from "./Juego";
import ConsultaJuegos from "../global/consultaJuegos";
// import { Col } from "reactstrap";
import React from "react";
import Grid from "@mui/material/Grid";
import "../css/plataforma.css";
import Compras from "./compras";

export const Xboxgames = () => {
  const [comprita, setComprita] = React.useState(false);
  const juegos = ConsultaJuegos("XboxGames");

  console.log("Juegos>>>>>>>>>>>>>>>>", juegos);
  return (
    <div className="fondoxbox">
      {comprita ? (
        <Compras />
      ) : (
        <Grid
          container
          justify="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          textAlign="center"
          className="Grid"
        >
          {juegos.map((juego, index) => (
            <Juego key={index} juego={juego} />
          ))}
        </Grid>
      )}
    </div>
  );
};
export default Xboxgames;
