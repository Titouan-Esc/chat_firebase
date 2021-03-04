import React, { useState, useEffect, useRef } from "react";
// ! Importation de nos const dans firebase.js
import { auth, db } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks";
import { useCollectionData } from "react-firebase-hooks/firestore";

function App() {
  return (
    <div>
      <header>
        <h1>Bienvenu sur le chat de la meilleur classe de Talis</h1>
        <button>Déconnection</button>
      </header>
      <section>{user ? <Chat /> : <SignIn />}</section>
    </div>
  );
}

export default App;
