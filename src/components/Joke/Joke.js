import React, {useState, useEffect} from 'react';
import styles from './Joke.module.css';
import Jokas from '../Jokas/Jokas'

const Joke = () => {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result.jokes);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  }  else {
    return (
      <ul>
        {items.map((joke, id) => (
           <Jokas setup={joke.setup} del={joke.delivery} key={id} joke = {joke.joke} />
        ))}
      </ul>
    );
  }
};


export default Joke;
