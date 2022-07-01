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
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  // pickind word and category
  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }

  // Starting the game
  const startGame = () => {
    // destructuring
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name);
  }

  // Processing the letter input
  const verifyLetter = (letter) => {
    console.log(letter)
    // setGameStage(stages[2].name)
  }

  // Retry the game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {/* Conditionally shows the page accordingly to the gameStage */}
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score} />)}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
