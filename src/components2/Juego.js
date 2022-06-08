import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Juego = ({ juego }) => {
  const [xbox, setxbox] = React.useState(true);
  const [modal, setModal] = useState(false);
  const handleToggle = () => setModal(!modal);
  console.log("Que pro>>>>>>>>>", juego);

  const abriralert = () => {
    Swal.fire({
      confirmButtonText: "Comprar!",
      backdrop: "rgba(0, 0, 0, 0.85)",
      background: juego.ImagenJuego,
      width: "40%",
      title: juego.NombreJuego,
      text: "MUCHO TEXTO EN ESTA SECCION,MUCHO TEXTO EN ESTA SECCIONMUCHO TEXTO EN ESTA SECCIONMUCHO TEXTO EN ESTA SECCION ",
      imageHeight: "97%",
      imageWidth: "100%",
      imageUrl: juego.ImagenJuego,
      footer: "$" + juego.PrecioJuego + ".00 mx",
      // html: '<header class="header-card"><p><b>28 de mayo</b></p></header><footer class="footer-card"><div class="imagen-card"><img src="https://cdn-prod.scalefast.com/public/assets/user/122595/image/cdb3282186e2abc6d0b0f610e9ec39c2.png" alt="Elden ring" /></div><div class="datos-card"><h4>Elden Ring</h4><p class="precio"><b>$1,500.00</b></p><p>ELDEN RING, desarrollado por FromSoftware, Inc. y BANDAI NAMCO Entertainment Inc. es un RPG de fantasía, acción y aventura ambientado en un mundo creado por Hidetaka Miyazaki y George R. R. Martin. El peligro y el descubrimiento están en cada giro del juego más grande de FromSoftware hasta la fecha.</p><p>AASAS343434JKDJS3434</p></div></footer>',
    });
  };

  return (
    <React.Fragment>
      <Grid item xs={2} sm={4} md={4} key={juego.id}>
        <Card
          style={{
            width: "80%",
            height: "80%",
            margin: "auto",
            // marginBottom: "0px",
          }}
          onMouseEnter={{ fontSize: "120%" }}
          className="zoom"
          onClick={abriralert}
        >
          <CardMedia
            component="img"
            height="80%"
            image={juego.ImagenJuego}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {juego.NombreJuego}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              $ {juego.PrecioJuego}.00 mx
            </Typography>
          </CardContent>
        </Card>
        {/* <img
          src={juego.ImagenJuego}
          alt="No se encontro la imagen"
          style={{
            width: "384px",
            height: "480px",
            margin: "50px",
            marginBottom: "0px",
          }}
          onMouseEnter={{ fontSize: "130%" }}
          className="zoom"
          onClick={abriralert}
        />
        <p
          style={{
            marginTop: "2px",
            fontWeight: "bold",
            marginBottom: "2px",
            color: "black",
          }}
        >
          {juego.NombreJuego}
        </p>
        <p style={{ fontWeight: "bold", marginBottom: "10px", color: "black" }}>
          $ {juego.PrecioJuego}.00 mx
        </p> */}
      </Grid>

      {/* <Modal
        isOpen={modal}
        // className="modal-lg"
        badkdrop={"static"}
        size="xl"
        position="absolute"
      >
        <ModalHeader toggle={handleToggle}>VideoJuegos</ModalHeader>
        <ModalBody>{juego.NombreJuego}</ModalBody>
        <ModalFooter>
          <p> ksafoihsafoihasoif</p>
        </ModalFooter>
      </Modal> */}
      <Modal
        open={modal}
        onClose={handleToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
export default Juego;
