// import React from "react";
import  Juego  from "./Juego";
import ConsultaJuegos from "../global/consultaJuegos";
// import { Col } from "reactstrap";
import React, { useState } from "react";
import { ModalBody, ModalFooter, ModalHeader, Col } from "reactstrap";
import Grid from '@mui/material/Grid';
import '../css/plataforma.css'

export const Xboxgames = () => {
  const juegos = ConsultaJuegos("XboxGames");
  // const [Index, setIndex] = useState(false);
  // const [Modal, setModal] = useState(false);
  // const handleToggle = () => setModal(!Modal);
  // const handleCallBack = (childData) => setIndex(childData);

  console.log("Juegos>>>>>>>>>>>>>>>>", juegos);
  return (
    <div className="fondo">
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
      {/* <Modal isOpen={Modal} className="modal-lg" badkdrop={"static"}>
        <ModalHeader toggle={handleToggle}>
          <ModalBody>
            {juegos.NombreJuego}
            <p>Hola mundo</p>
          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </ModalHeader>
      </Modal> */}
    </div>
  );
};
export default Xboxgames;
