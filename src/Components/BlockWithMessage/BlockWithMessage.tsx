import "./style.css";
function BlockWithMessage() {
  return (
    <div className="blockWithMessageWrapper">
      <div className="messageTitle">
        Are you ready to board this rocket ship?
      </div>
      <div className="messageDescription">Share your excitement with us.</div>
      <div className="messageBoxWrapper">
        <input className="messageInput" type="text" placeholder="Name*" />
        <input className="messageInput" type="text" placeholder="Email*" />
        <textarea className="messageInput message" placeholder="Message*" />
        <div className="filledButton">Shoot us a message</div>
      </div>
    </div>
  );
}

export default BlockWithMessage;
