import { useEffect, useRef, useState } from "react";

export const HookUseRef = () => {
  // 1 - useRef:cria referência de valor
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current += 1;
    // setCounter(counter + 1); // esse state nesse useEffect geraria um loop infinito de renderizações, o que não acontece com o useRef acima, pois ele não desencadeia re-renderizações
  });

  // 2 - useRef e DOM
  const inputRef = useRef();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    // Usando useRef para focar novamente no input após o envio do form
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef</h2>
      {/* 1 - useRef */}
      <p>O componente renderizou: {numberRef.current} vezes.</p>
      <p>Counter A: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      {/* 2 - useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} /> {/* input linkado com o ref criado acima */}
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  );
}

/*
useRef por ser utilizado como useState para gerenciar valores.
A diferença é que ele é um objeto em que o valor está na propriedade 'current'.
O useRef NÃO re-renderiza o componente ao ser alterado, o que pode ser interessante em vários casos.

Pode ser usado pra selecionar elementos do JSX no lugar de querySelectors e afins. Com isso, podemos fazer manipulação de DOM.
*/