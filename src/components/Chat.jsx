import firebase, { auth, db } from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import React, { useState } from "react";

const Chat = () => {
  // ! Referance à ma base de donnée "message"
  const messageRef = db.collection("message");
  const query = messageRef.orderBy("CreatedAt").limitToLast(25);

  //   ? Creation d'un state avec un element d'une collection
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth().currentUser;
    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: photoURL,
    });

    setFormValue("");
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
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
