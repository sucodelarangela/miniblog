const UserDetails = ({ name, age, profession }) => {
  return (
    <div>
      <h1>Detalhes dos usuários</h1>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Profissão: {profession}</li>
      </ul>
      {age >= 18 && <p>Pode tirar carteira de habilitação!</p>}
    </div>
  );
};

export default UserDetails;