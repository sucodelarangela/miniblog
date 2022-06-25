const TemplateExpressions = () => {
  const name = 'Angela';
  const data = {
    age: 37,
    job: 'Architect'
  };

  return (
    <div>
      <h2>Olá, {name}, tudo bem?</h2>
      <p>Você atua como {data.job}</p>
      <p>{4 + 4}</p>
    </div>
  );
};

export default TemplateExpressions;