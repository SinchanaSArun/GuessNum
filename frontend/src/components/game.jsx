// import React, { useState } from "react";
// import './game.css'

// const Game = () => {



//     const [min, setMin] = useState(0);
//     const [max, setMax] = useState(0);
//     const [randomNum, setRandomNum] = useState(0);
//     const [guess, setGuess] = useState(0);
//     const [feedback, setFeedback] = useState(''); 
//     const [attempts, setAttempts] = useState(0); 
//     const [score,setScore]=useState(0);

//     const handleRandomNumber = () => {
//         setRandomNum(Math.floor(Math.random()
//             * (max - min + 1) + min));
//         setFeedback(''); // Reset feedback when a new number is generated
//         setAttempts(0); // Reset attempts when a new number is generated
//     };

//     const handleGuess = () => {
//         const guessedNumber = parseInt(guess, 10);
//         setAttempts(prev => prev + 1); 
//         if (guessedNumber === randomNum) {
//             setFeedback('Congratulations! Your guess is correct.');
//             setScore(prev=>prev+100);
//         } else if (guessedNumber > randomNum) {
//             setFeedback('Your guess is too high. Try again.');
//             setScore(prev=>prev-1);
//         } else if (guessedNumber < randomNum) {
//             setFeedback('Your guess is too low. Try again.');
//             setScore(prev=>prev-1);
//         }
//     };
 
 
 
//     return (

//    <>   
   

//         <div className="game-app">
            
//             <div className="game-container">
//                 <div className="randomNumber">
//                 {/* <h2>Number is: {randomNum}</h2> */}
//                 </div>
//                 <div className="numContainer">
//                     <div>
//                 <input type='number' placeholder='enter minimum value' id={min} onChange={(e)=>setMin(+e.target.value)}/>
//                 <input type='number' placeholder='enter maximum value' id={max} onChange={(e)=>setMax(+e.target.value)}/>
//                 <button onClick={handleRandomNumber}>SET TARGET</button>
//                 <br/>
//                 <br/>
//                 <input type="number" placeholder="enter your guess" id={guess} onChange={(e)=>setGuess(e.target.value)}/>
             
//             </div>
     
//       <button onClick={handleGuess}>Submit Guess</button>
//       {feedback && <p>{feedback}</p>}
//       <p>Attempts: {attempts}</p>
//       <p>Score:{score}</p>
//         </div>
//         </div>
//         </div>
//         </>
//     );
// };
 


// // export default Game
// import React, { useState, useEffect } from "react";
// import axios from 'axios';  // Import axios for HTTP requests
// import './game.css';

// const Game = () => {
//     const [min, setMin] = useState(0);
//     const [max, setMax] = useState(0);
//     const [randomNum, setRandomNum] = useState(0);
//     const [guess, setGuess] = useState(0);
//     const [feedback, setFeedback] = useState('');
//     const [attempts, setAttempts] = useState(0);
//     const [score, setScore] = useState(0);
//     const [userEmail, setUserEmail] = useState('');

//     useEffect(() => {
//         // Get the user's email from localStorage
//         const email = localStorage.getItem('userEmail');
//         if (email) {
//             setUserEmail(email);
//         }
//     }, []);

//     const handleRandomNumber = () => {
//         setRandomNum(Math.floor(Math.random() * (max - min + 1) + min));
//         setFeedback(''); // Reset feedback when a new number is generated
//         setAttempts(0); // Reset attempts when a new number is generated
//     };

//     const handleGuess = () => {
//         const guessedNumber = parseInt(guess, 10);
//         setAttempts(prev => prev + 1);
        
//         if (guessedNumber === randomNum) {
//             setFeedback('Congratulations! Your guess is correct.GAME OVER');
//             setScore(prev => prev + 100);
            
//         } else if (guessedNumber > randomNum) {
//             setFeedback('Your guess is too high. Try again.');
//             setScore(prev => prev - 1);
//         } else if (guessedNumber < randomNum) {
//             setFeedback('Your guess is too low. Try again.');
//             setScore(prev => prev - 1);
//         }

//         // Send the score to the backend, along with the user's email
//         axios.post('http://localhost:3001/update-score', {
//             email: userEmail,  // Use the user's email from localStorage
//             score: score + (guessedNumber === randomNum ? 100 : -1)
//         })
//         .then(response => {
//             console.log('Score updated:', response.data);
//         })
//         .catch(error => {
//             console.error('Error updating score:', error);
//         });
//     };

//     return (
//         <div className="game-app">
//             <div className="game-container">
//                 <div className="numContainer">
//                     <input type='number' placeholder='Enter minimum value' onChange={(e) => setMin(+e.target.value)} />
//                     <input type='number' placeholder='Enter maximum value' onChange={(e) => setMax(+e.target.value)} />
//                     <button onClick={handleRandomNumber}>SET TARGET</button>
//                     <br />
//                     <br />
//                     <input type="number" placeholder="Enter your guess" onChange={(e) => setGuess(e.target.value)} />
//                 </div>
//                 <button onClick={handleGuess}>Submit Guess</button>
//                 {feedback && <p>{feedback}</p>}
//                 <p>Attempts: {attempts}</p>
//                 <p>Score: {score}</p>
//             </div>
//         </div>
//     );
// };

// export default Game;

// import React, { useState } from "react";
// import axios from 'axios';
// import './game.css';

// const Game = () => {
//     const [min, setMin] = useState(0);
//     const [max, setMax] = useState(0);
//     const [randomNum, setRandomNum] = useState(0);
//     const [guess, setGuess] = useState(0);
//     const [feedback, setFeedback] = useState(''); 
//     const [attempts, setAttempts] = useState(0); 
//     const [score, setScore] = useState(0);

//     const handleRandomNumber = () => {
//         setRandomNum(Math.floor(Math.random() * (max - min + 1) + min));
//         setFeedback(''); 
//         setAttempts(0);
//     };

//     const handleGuess = () => {
//         const guessedNumber = parseInt(guess, 10);
//         setAttempts(prev => prev + 1); 

//         if (guessedNumber === randomNum) {
//             setFeedback('Congratulations! Your guess is correct.');
//             setScore(prev => prev + 100);
//             handleScoreUpdate(); // Update score when guessed correctly
//         } else if (guessedNumber > randomNum) {
//             setFeedback('Your guess is too high. Try again.');
//             setScore(prev => prev - 1);
//         } else if (guessedNumber < randomNum) {
//             setFeedback('Your guess is too low. Try again.');
//             setScore(prev => prev - 1);
//         }
//     };

//     const handleScoreUpdate = () => {
//         axios.post('http://localhost:3001/update-score', { email: 'user@example.com', score })
//             .then(response => {
//                 console.log(response.data.message);
//             })
//             .catch(error => console.error('Error updating score:', error));
//     };

//     return (
//         <>
//             <div className="game-app">
//                 <div className="game-container">
//                     <div className="randomNumber">
//                         {/* <h2>Number is: {randomNum}</h2> */}
//                     </div>
//                     <div className="numContainer">
//                         <div>
//                             <input type='number' placeholder='enter minimum value' id={min} onChange={(e) => setMin(+e.target.value)} />
//                             <input type='number' placeholder='enter maximum value' id={max} onChange={(e) => setMax(+e.target.value)} />
//                             <button onClick={handleRandomNumber}>SET TARGET</button>
//                             <br />
//                             <br />
//                             <input type="number" placeholder="enter your guess" id={guess} onChange={(e) => setGuess(e.target.value)} />
//                         </div>
//                         <button onClick={handleGuess}>Submit Guess</button>
//                         {feedback && <p>{feedback}</p>}
//                         <p>Attempts: {attempts}</p>
//                         <p>Score: {score}</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Game;

import React, { useState } from "react";
import './game.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Game = () => {
    const navigate = useNavigate();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [randomNum, setRandomNum] = useState(null);
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState(''); 
    const [attempts, setAttempts] = useState(0); 
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const handleRandomNumber = () => {
        setRandomNum(Math.floor(Math.random() * (max - min + 1) + min));
        setFeedback(''); // Reset feedback when a new number is generated
        setAttempts(0); // Reset attempts when a new number is generated
        setGameOver(false); // Reset game over status
        setScore(0); // Reset score if necessary
    };

    const handleGuess = () => {
        if (gameOver) return; // Prevent guessing if the game is over

        const guessedNumber = parseInt(guess, 10);
        setAttempts(prev => prev + 1); 
        if (guessedNumber === randomNum) {
            setFeedback('Congratulations! Your guess is correct.');
            setScore(prev => prev + 100);
            setGameOver(true); // End the game
            // handleScoreUpdate(); // Call function to update score in the backend
            navigate('/gameover', { state: { score } }); // Navigate to GameOver screen
        } else if (guessedNumber > randomNum) {
            setFeedback('Your guess is too high. Try again.');
            setScore(prev => prev - 1);
        } else if (guessedNumber < randomNum) {
            setFeedback('Your guess is too low. Try again.');
            setScore(prev => prev - 1);
        }
    };


    return (
        <>
            <div className="game-app">
                <div className="game-container">
                    <div className="randomNumber">
                        {/* <h2>Number is: {randomNum}</h2> */}
                    </div>
                    <div className="numContainer">
                        <div>
                            <input 
                                type='number' 
                                placeholder='enter minimum value' 
                                onChange={(e) => setMin(+e.target.value)} 
                            />
                            <input 
                                type='number' 
                                placeholder='enter maximum value' 
                                onChange={(e) => setMax(+e.target.value)} 
                            />
                            <button onClick={handleRandomNumber}>SET TARGET</button>
                            <br />
                            <br />
                            <input 
                                type="number" 
                                placeholder="enter your guess" 
                                value={guess}
                                onChange={(e) => setGuess(e.target.value)} 
                            />
                        </div>
                        <button onClick={handleGuess} disabled={gameOver}>Submit Guess</button>
                        {feedback && <p>{feedback}</p>}
                        <p>Attempts: {attempts}</p>
                        <p>Score: {score}</p>
                        {gameOver && <p>Game Over! Final Score: {score}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Game;


   