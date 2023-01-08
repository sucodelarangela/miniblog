import { ChangeEvent, useState } from "react";

const State = () => {
  const [text, setText] = useState<string | null>('Testando o hook');

  // O event recebe o tipo Evento de Change com o tipo generic HTMLInputElement
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default State;