const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  return (
    <div className="message">
      <img src={photoURL} alt="User photo" />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
