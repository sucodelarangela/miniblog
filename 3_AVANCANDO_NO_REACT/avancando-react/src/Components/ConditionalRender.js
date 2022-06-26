import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState('Matheus');

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {/* Simple conditional: if the condition on the left is true, the component/variable on the right will be rendered */}
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso.</p>}
      <h1>If ternário</h1>
      {name === 'João' ? (
        <div>
          <p>O nome é João.</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado.</p>
        </div>
      )}
      <button onClick={() => setName('João')}>Clique aqui!</button>
    </div>
  );
};

export default ConditionalRender;