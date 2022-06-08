import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../css/plataforma.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:"80%",
  height:"90%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:"center",
};

const Juego=({ juego })=> {
  const [modal, setModal] = useState(false);
  const handleToggle = () => setModal(!modal);
  console.log("Que pro>>>>>>>>>", juego);
  return (
    <React.Fragment>
      <Grid item xs={2} sm={4} md={4} key={juego.id}>
        <div>
          <img
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
            onClick={handleToggle}
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
          <p
            style={{ fontWeight: "bold", marginBottom: "10px", color: "black" }}
          >
            $ {juego.PrecioJuego}.00 mx
          </p>
        </div>
      </Grid>
      <Modal
        open={modal}
        onClose={handleToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography 
          id="modal-modal-title" 
          variant="h5" 
          component="h2"
          >
            {juego.NombreJuego}
{/* 
            <button onClick={handleToggle}>x</button> */}
          </Typography>
          <Typography 
          id="modal-modal-description" 
          sx={{ mt: 2 }}
          style={{marginLeft:"5%", marginRight:"5%"}}
          textAlign="justify"
          >
            <strong>Descripcion del Juego</strong>
            <br/>
            {juego.descripcion}
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
export default Juego;
