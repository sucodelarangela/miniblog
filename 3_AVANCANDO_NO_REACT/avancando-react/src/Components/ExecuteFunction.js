const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique aqui para executar a função</button>
    </div>
  );
};

export default ExecuteFunction;

// myFunction comes from the parent component as a prop