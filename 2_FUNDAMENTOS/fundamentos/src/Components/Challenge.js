const Challenge = () => {
  const firstValue = 6;
  const secondValue = 7;

  const handleSum = () => {
    console.log(firstValue + secondValue);
  };

  return (
    <div>
      <h4>O primeiro valor a ser somado é o número {firstValue}.</h4>
      <h4>O segundo valor a ser somado é o número {secondValue}.</h4>
      <p>Clique no botão a seguir e veja o resultado no console do navegador</p>
      <button onClick={handleSum}>Somar valores</button>
    </div>
  );
};

export default Challenge;