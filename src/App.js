import { LoginButton } from "./components/loginbutton";
import { LogoutButton } from "./components/logoutbutton";
import Catalogo from "./components2/catalogo";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Catalogo />
          <LogoutButton />
        </>
      ) : (
        <div>
          <h1>Bienvenido a Dynamite Gaming</h1>
          <h1>Estas listo para entrar?</h1>
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default App;
