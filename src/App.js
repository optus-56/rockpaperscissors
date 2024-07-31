import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [userChoice, setUserChoice] = useState("rock")
  const [botChoice, setBotChoice] = useState("rock")
  const [userPoints, setUserPoints] = useState(0)
  const [botPoints, setBotPoints] = useState(0)
  const [result, showResult] = useState("")
  const [gameOver, isGameOver] = useState(false)

  return (
    <div className="App">
      <h1 className="title"> Rock, Paper, Scissors</h1>
      <div className="points">
        <h2> User Points : </h2>
        <h2> Bot Points: </h2>
      </div>
      
    </div>
  );
}

export default App;
