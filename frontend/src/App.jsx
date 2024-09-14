import React from 'react'
import Register from './components/register'
import Home from './components/home'
import Login from './components/login'
import Game from './components/game'
import Navbar from './components/navbar'
import GameOver from './components/gameOver'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {


  return (
  <BrowserRouter>
   <Navbar/>
    <Routes>
         {/* <Route path="/" element={</>}/> */}
        
        <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/gameover" element={<GameOver />} />
    </Routes>
    </BrowserRouter>

    
  );
}

export default App
