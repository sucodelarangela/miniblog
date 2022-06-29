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

  console.log(words)

  return (
    <div className="App">
      {/* Conditionally shows the page accordingly to the gameStage */}
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  );
}

export default App;
