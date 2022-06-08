// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Card = (
  //   avatar = Math.floor(Math.random() * (11 - 1)) + 1,
  sender = "Sender_name",
  message = "message_text"
) => {
  return (
    <div className="cpn-card">
      <div className="cpn-card-avatar">hello</div>
      <div className="cpn-card-text">
        <h3>{sender}</h3>
        <p>{message}</p>
      </div>
      {/* <faCoffee /> */}
    </div>
  );
};

export default Card;
