import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const avatar = require(`../assets/avatars/avatar_${
    Math.floor(Math.random() * (11 - 1 + 1)) + 1
  }.svg`);

  console.log(avatar);
  return (
    <div className="cpn-card">
      <div className="cpn-card_left">
        <img src={avatar} alt="avatar" className="cpn-card-avatar" />
        <div className="cpn-card-text">
          <h3>{`${props.sender}`}</h3>
          <p>{props.message}</p>
        </div>
      </div>
      <FontAwesomeIcon icon={faTrash} className="cpn-card-trash" />
    </div>
  );
};

export default Card;
