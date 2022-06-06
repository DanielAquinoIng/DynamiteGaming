import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function ConsultaJuegos(coleccion) {
  const [juegos, setJuegos] = useState([]);

  const obtenerJuegos = async () => {
    const catalogo = await getDocs(collection(db, coleccion));
    console.log('Catalogo', catalogo);
    const prevJuegos = [];
    catalogo.forEach((juego) => {
      prevJuegos.push({
        id: juego.data().id,
        NombreJuego: juego.data().NombreJuego,
        PrecioJuego: juego.data().PrecioJuego,
        ImagenJuego: juego.data().ImagenJuego,
      });
    });
    setJuegos(prevJuegos);
  };

  useEffect(() => {
    obtenerJuegos();
  }, []);
  return juegos;
}

export default ConsultaJuegos;
