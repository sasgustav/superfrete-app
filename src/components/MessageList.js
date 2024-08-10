import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className="message-item">
          <FontAwesomeIcon icon={faSmile} /> <p>{msg.text}</p>
          <span>{new Date(msg.timestamp.seconds * 1000).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
