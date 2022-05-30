import React, { useState } from "react";

import firebaseApp from "../components/credenciales";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();


const Reset = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

    async function submitHandler(e) {
        e.preventDefault();
        const correo = e.target.formBasicEmail.value;
        const contra = e.target.formBasicPassword.value;
    
        if (estaRegistrandose) {
          //si se registra
          const usuario = await createUserWithEmailAndPassword(
            auth,
            correo,
            contra
          );
        } else {
          // si está iniciando sesión
          signInWithEmailAndPassword(auth, correo);
        }
      }
    
      return (
        <h1>Hola</h1>
      );
   
}

export default Reset;