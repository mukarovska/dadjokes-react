import { Joke } from '../../Components/Joke';
import './style.css';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJokes(data.result);
    };

    handleFetch();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => {
        return (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        );
      })}
    </div>
  );
};
