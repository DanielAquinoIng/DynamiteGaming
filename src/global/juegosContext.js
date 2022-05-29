import React, { createContext } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const JuegosContext = createContext();

export class JuegosContextProvider extends React.Component {
  state = {
    juegos: [],
  };

  componentDidMount() {
    const prevJuegos = this.state.juegos;

    const obtenerJuegos = async () => {
      const catalogo = await getDocs(collection(db, "Juegos"));
      catalogo.forEach((juego) => {
        prevJuegos.push({
          IdJuego: juego.id,
          NombreJuego: juego.data().NombreJuego,
          PrecioJuego: juego.data().PrecioJuego,
          ImagenJuego: juego.data().ImagenJuego,
        });
        this.setState({
            juegos: prevJuegos,
          });
      });
    };

    obtenerJuegos();
  }

  render() {
    return (
      <JuegosContext.Provider value={{ juegos: [...this.state.juegos] }}>
        {this.props.children}
      </JuegosContext.Provider>
    );
  }
}