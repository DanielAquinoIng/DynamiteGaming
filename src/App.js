import { LoginButton } from "./components/loginbutton";
import { LogoutButton } from "./components/logoutbutton";
import Catalogo from "./components2/catalogo";
import { useAuth0 } from "@auth0/auth0-react";
import Fondito from './assets/images/fondito.jpg'
import Dynamite from './assets/images/pngwing.com.png'

function App() {
  const { isAuthenticated } = useAuth0();

  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{backgroundImage: {Fondito}, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      {isAuthenticated ? (
        <>
          <Catalogo />
        </>
      ) : (
        <div className="listoEntrar">
          <h1>Bienvenido a Dynamite Gaming</h1>
          <h1>Estas listo para entrar?</h1>
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default App;
