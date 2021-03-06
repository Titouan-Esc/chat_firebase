import React, { useState, useEffect, useRef } from "react";
// ! Importation de nos const dans firebase.js
import { auth, db } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import SignOut from "./components/SignOut";
import scss from "./assets/sass/style.scss";

function App() {
  const [user] = useAuthState(auth());

  return (
    <div className="body">
      <header>
        <h1>Bienvenu sur le chat de la meilleur classe de Talis</h1>
        <SignOut />
      </header>
      <section>{user ? <Chat /> : <SignIn />}</section>
    </div>
  );
}

export default App;
