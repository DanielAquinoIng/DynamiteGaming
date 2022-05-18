import { LoginButton } from "./components/loginbutton";
import { LogoutButton } from "./components/logoutbutton";
import Catalogo from "./components2/catalogo";
import { useAuth0 } from "@auth0/auth0-react";
import {Col, Row, Container} from 'reactstrap';
import ElderRing from './assets/images/ElderRing.jpg';
import FarCry from './assets/images/FarCry.jpg';
import GhostOfTsushima from './assets/images/GhostOfTsushima.jpg';
import MonosChinos from './assets/images/MonosChinos.jpg';
import Wonderlands from './assets/images/Wonderlands.jpg';
import COD from './assets/images/COD.jpg';
import Dynamite from './assets/images/pngwing.com.png'
import Fondo from './assets/images/Fondo.jpg';

function App() {
  const { isAuthenticated } = useAuth0();

  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{backgroundImage: "url(https://sm.ign.com/ign_es/screenshot/default/2381381-hyrule_xv2r.jpg)", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      {isAuthenticated ? (
        <>
        <div style={{textAlign:"center", backgroundColor:"red", marginBottom:"10px"}}>
          <img src={Dynamite} className="img-fluid" style={{width: "30px", height:"30px", verticalAlign:"-8px"}}/>
          {/* <p style={{color:"white"}}>DynamiteGaming</p> */}
            <input style={{ margin: "8px", alignSelf: "center", width:"800px", height:"35px", fontSize:"22px" }} placeholder="Buscar"></input>
        </div>
          {/* <input style={{marginTop:"8px", alignSelf:"center"}}></input> */}
          <Catalogo />
          <Container>
            {/* <Row>
              <Col md='6' style={{ color: "white" }}><img src={ElderRing} /></Col>
             </Row>
            <Row>
              <Col md = '6' style={{ color: "white" }}><img src={ElderRing} /></Col>
            </Row>
            <Row>
              <Col style={{ color: "white" }}><img src={ElderRing} /></Col>
            </Row>  */}
          {/* </Row> */}
            <div style={{ textAlign: "center" }}>
              {/* <div style={{ position: "absolute" }}> */}
                <img src={ElderRing} style={{ width: '384px', height: '480px', margin: '50px' }} onMouseEnter={{ fontSize: "130%" }} className="zoom" />
                {/* <p style={{ color: "white" }}>hhh</p> */}
              {/* </div>
              <div style={{ position: "absolute" }}> */}
                <img src={FarCry} style={{ width: '384px', height: '480px', margin: '50px' }} onMouseEnter={{ fontSize: "130%" }} className="zoom" />
                {/* <p>hhh</p> */}
              {/* </div>
              <div style={{ position: "absolute" }}> */}
                <img src={GhostOfTsushima} style={{ width: '384px', height: '480px', margin: '50px' }} onMouseEnter={{ fontSize: "130%" }} className="zoom" />
              {/* </div> */}
            </div>
            <div style={{textAlign:"center"}} onMouseEnter={{ fontSize: "130%" }}>
              <img src={MonosChinos} style={{width:'384px', height:'480px', margin:'50px'}} onMouseEnter={{ fontSize: "130%" }} className="zoom"/>
              <img src={Wonderlands} style={{width:'384px', height:'480px', margin:'50px'}} onMouseEnter={{ fontSize: "130%" }} className="zoom"/>
              <img src={COD} style={{width: '384px', height: '480px', margin:'50px'}} onMouseEnter={{ fontSize: "130%" }} className="zoom"/>
            </div>
          </Container>
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
