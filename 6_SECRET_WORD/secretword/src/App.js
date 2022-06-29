// dependencies
import { useCallback, useEffect, useState } from 'react'

// data
import { wordsList } from './data/words'

// styles
import './App.css';

// components
import StartScreen from './Components/StartScreen';
import Game from './Components/Game';
import GameOver from './Components/GameOver';

// the components will show on the start screen according to the current game stage. Example: The StartScreen component will only show when the current gameStage state is set to the stages.name === 'start'
const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // Starting the game
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  // Processing the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // Retry the game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {/* Conditionally shows the page accordingly to the gameStage */}
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
