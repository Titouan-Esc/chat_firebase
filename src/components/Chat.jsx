import React, { useState, useEffect, useRef } from "react";
import firebase, { auth, db } from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  const scroller = useRef();
  // ! Referance à ma base de donnée "message"
  const messageRef = db.collection("messages");
  const query = messageRef.orderBy("createdAt").limitToLast(25);

  //   ? Creation d'un state avec un element d'une collection
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth().currentUser;
    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      photoURL,
      uid,
      displayName,
    });

    setFormValue("");
  };

  useEffect(() => {
    scroller.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={scroller}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Ecrit batard de tes morts"
        />
        <button type="submit" disabled={!formValue}>
          Envoyer !
        </button>
      </form>
    </>
  );
};

export default Chat;
