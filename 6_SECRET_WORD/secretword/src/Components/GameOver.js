// styles
import './GameOver.css'

const GameOver = ({ retry }) => {
  return (
    <div>
      <h2>Game Over</h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver