import './MyForm.css';
import { useState } from 'react';

const MyForm = ({ user }) => {
  // controlled inputs
  // manipulating data
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  // 1st way of retrieving input values.
  const handleName = (e) => {
    setName(e.target.value)
  }

  // 2nd way of retrieving input values is using the useState inline: it may be cleaner if you have too many inputs (see email input). It's used simply for getting data. If you have other kinds of manipulation, it's better to create a function

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando o formulário')
    console.log(name, email)

    // cleaning the form
    setName('')
    setEmail('')
  }

  return (
    <div>
      {/* Creating forms */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* Form submit */}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleName}
            placeholder="Digite o seu nome"
            value={name}
          />
          {/* Input inside label */}
          <label>
            E-mail:
            {/* <span>E-mail:</span> --- Using span is not good for accessibility*/}
            <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

/* React docs recommend using the input inside the label tag */
