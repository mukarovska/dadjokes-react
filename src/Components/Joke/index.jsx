import { JokeLikes } from '../JokeLikes';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>

      <JokeLikes likes={likes} dislikes={dislikes} />
    </div>
  );
};
