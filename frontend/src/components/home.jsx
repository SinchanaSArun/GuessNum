import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
const Home = () => {
  return (
    <div className='rules-page'>
      <div className='rules-container'>
      WELCOME TO GUESSNUM
      <br/>
      RULES:
      <ul>
        <li> This is number guessing game .You get to set the target values</li>
        <li>
        For every right guess you win 100 points
        </li>
        <li>
        For every wrong guess you loose 1 point
        </li>
      </ul>
<button>
<Link to="/game">Start Game</Link>
</button>

    </div>
    </div>
  );
}

export default Home
