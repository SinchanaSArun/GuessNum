import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './gameOver.css'; 
import {highscore, score} from './login'

const GameOver = () => {
    
    // axios.post('http://localhost:3001/gameover',{highscore,score})

    return (
        <div className="gameover-page">
            <div className="gameover-container">
                <h2>Game Over!</h2>
                <p>Your Final Score: {score+100}</p>
                {/* <button> */}
                <Link to="/home">Back Home</Link>
                <br/>
                {/* </button> */}
               {/* <button> */}
               <Link to="/game">Play Again</Link>
               {/* </button> */}
         
            </div>
        </div>
    );
};

export default GameOver;
