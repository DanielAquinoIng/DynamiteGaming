import { useAuth0 } from "@auth0/auth0-react";
import Fondito from '../assets/images/fondito.jpg'
import Dynamite from '../assets/images/pngwing.com.png'

function BarraBusqueda() {
  const { isAuthenticated } = useAuth0();

  const { loginWithRedirect } = useAuth0();

  return (
    <div>
        <div className="barraBusqueda">
          <img src={Dynamite} className="img-fluid" style={{width: "30px", height:"30px", verticalAlign:"-8px"}}/>
            <input className="inputBusqueda" placeholder="Buscar"></input>
        </div>
    </div>
  );
}

export default BarraBusqueda;
