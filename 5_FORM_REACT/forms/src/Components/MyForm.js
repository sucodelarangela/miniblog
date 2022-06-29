import './MyForm.css';
import { useState } from 'react';

const MyForm = () => {
  // manipulating data
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  // 1st way of retrieving input values.
  const handleName = (e) => {
    setName(e.target.value)
  }

  console.log(name)
  console.log(email)

  // 2nd way of retrieving input values is using the useState inline: it may be cleaner if you have too many inputs (see email input). It's used simply for getting data. If you have other kinds of manipulation, it's better to create a function

  return (
    <div>
      {/* Creating forms */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleName}
            placeholder="Digite o seu nome"
          />
          {/* Input inside label */}
          <label>
            E-mail:
            {/* <span>E-mail:</span> --- Using span is not good for accessibility*/}
            <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

/* React docs recommend using the input inside the label tag */
