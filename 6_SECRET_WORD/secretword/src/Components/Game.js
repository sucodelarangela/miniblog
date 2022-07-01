// styles
import './Game.css'

// hooks
import { useState, useRef } from 'react'

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
  const [letter, setLetter] = useState('')

  // useRef works as a querySelector. Here we save the ref in a variable and in the input tag we use the attribute "ref" to set the variable name and link the element to the hook
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Verify the letter on input
    verifyLetter(letter)

    // clears the input
    setLetter('')

    // focus again on the input
    letterInputRef.current.focus()
  }

  return (
    <div className="game">
      <p className="point">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s)</p>
      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className='letter'>{letter}</span>
          ) : (
            <span key={i} className='blankSquare'></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name='letter'
            maxLength='1'
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef} />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div >
  )
}

export default Game