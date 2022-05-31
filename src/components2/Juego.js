import React, { useState } from "react";
import { Link } from "react-router-dom";
import InfoVidejuegos from './InfoVideojuego'
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Grid from '@mui/material/Grid';
// import ModalJuego from "./InfoVideojuego";
const Juego=({ juego })=> {
  // const onTrigger = (event) => {
console.log("Props>>>>>>>>>>>>", juego);
  // }
  const [Modal, setModal] = useState(true);
  const handleToggle = () => setModal(!Modal);

  return (
    <>
      {/* <div> */}
      {/* <div key={juego.IdJuego}> */}
      {/* <div> */}
      {/* <Link type="submit" to="./InfoVideojuego"> */}
      <Grid item xs={2} sm={4} md={4}>
        <div>
        <img
          src={juego.ImagenJuego}
          alt="No se encontro la imagen"
          style={{ width: "384px", height: "480px", margin: "50px", marginBottom:"0px" }}
          onMouseEnter={{ fontSize: "130%" }}
          className="zoom"
          // onClick={handleToggle}
        />
         <p style={{marginTop:"2px", fontWeight:"bold", marginBottom:"2px", color:"black"}}>{juego.NombreJuego}</p>
         <p style={{fontWeight:"bold", marginBottom:"10px", color:"black"}}>$ {juego.PrecioJuego}.00 mx</p>
         </div>
        </Grid>
      {/* </Link> */}
      {/* <p style={{margin:"50px"}}>{juego.NombreJuego}</p> */}
      {/* <div className="juego-price">$ {juego.PrecioJuego}.00</div> */}
      {/* </div> */}
      {/* <Modal isOpen={Modal} className="modal-lg" badkdrop={"static"}>
        <ModalHeader toggle={handleToggle}>
          <ModalBody>{juego.NombreJuego}</ModalBody>
          <ModalFooter>
            <p> ksafoihsafoihasoif</p>
          </ModalFooter>
        </ModalHeader>
      </Modal> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default Juego;
