import { auth } from "../services/firebase";
import React, { useState } from "react";

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL, displayName } = message;

  const messageClass = uid === auth().currentUser.uid ? "envoye" : "reçu";
  return (
    <div className={`message_${messageClass}`}>
      <img src={photoURL} alt="User photo" />
      <p>{text}</p>
      <p className="name">{displayName}</p>
    </div>
  );
};

export default ChatMessage;
