import React, { useState } from "react";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalJuego =({juego})=> {
    const [Modal, setModal] = useState(true);
    const handleToggle = () => setModal(!Modal);
    return (
        <Modal isOpen={Modal} className="modal-lg" badkdrop={"static"}>
        <ModalHeader toggle={handleToggle}>
          <ModalBody>
            {juego.NombreJuego}
          </ModalBody>
          <ModalFooter>
              <p> ksafoihsafoihasoif</p>
          </ModalFooter>
        </ModalHeader>
      </Modal>
    );
}
export default ModalJuego;