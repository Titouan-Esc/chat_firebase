import { db } from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  // ! Referance à ma base de donnée "message"
  const messageRef = db.collection("message");
  const query = messageRef.orderBy("CreatedAt").limitToLast(25);

  //   ? Creation d'un state avec un element d'une collection
  const [messages] = useCollectionData(query, { idField: "id" });
  return (
    <main>
      {messages &&
        messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
    </main>
  );
};

export default Chat;
