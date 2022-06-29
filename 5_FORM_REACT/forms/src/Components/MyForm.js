import './MyForm.css';

const MyForm = () => {
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
            placeholder="Digite o seu nome"
          />
          {/* Input inside label */}
          <label>
            E-mail:
            {/* <span>E-mail:</span> --- Using span is not good for accessibility*/}
            <input type="email" name="email" placeholder="Digite seu e-mail" />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

/* React docs recommend using the input inside the label tag */
