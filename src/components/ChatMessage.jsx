const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  return (
    <div className="message">
      <img
        src="https://images.pexels.com/photos/53510/head-details-otter-close-up-53510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="User photo"
      />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
