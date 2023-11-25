import { useState } from 'react';
import './style.css';

export const JokeLikes = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const handleButtonUp = () => {
    setUpLikes(upLikes + 1);
  };
  const handleButtonDown = () => {
    setDownLikes(downLikes + 1);
  };
  return (
    <div className="joke__likes">
      <button
        onClick={handleButtonUp}
        id="btn-up"
        className="btn-like btn-like--up"
      ></button>
      <span id="likes-up" className="likes-count likes-count--up">
        {upLikes}
      </span>
      <button
        onClick={handleButtonDown}
        id="btn-down"
        className="btn-like btn-like--down"
      ></button>
      <span id="likes-down" className="likes-count likes-count--down">
        {downLikes}
      </span>
    </div>
  );
};
