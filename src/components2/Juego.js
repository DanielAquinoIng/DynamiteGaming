import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../css/plataforma.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const Juego=({ juego })=> {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

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
            <strong>{juego.NombreJuego}</strong>
{/* 
            <button onClick={handleToggle}>x</button> */}
          </Typography>
          <Typography 
          id="modal-modal-description" 
          sx={{ mt: 2 }}
          style={{marginLeft:"10%", marginRight:"10%", fontSize:"large"}}
          textAlign="justify"
          >
            <strong>Descripcion del Juego</strong>
            <br/>
            {juego.descripcion}
          </Typography>
          <br></br>
            <Box sx={{ maxWidth: 400, flexGrow: 1, margin:"auto" }}>
              <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography><strong>Galeria</strong></Typography>
              {/* <Typography>{images[activeStep].label}</Typography> */}
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 255,
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
          <br></br>
          <Button variant="contained" href="">
            <ShoppingCartIcon/>
            Comprar
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
export default Juego;