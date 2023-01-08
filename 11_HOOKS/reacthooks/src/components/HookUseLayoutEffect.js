import { useState, useEffect, useLayoutEffect } from "react";

export const HookUseLayoutEffect = () => {
  const [name, setName] = useState('Algum nome');

  useEffect(() => {
    console.log('Executou useEffect');
    setName('Mudou de novo');
  }, []);

  useLayoutEffect(() => {
    console.log('Executou useLayoutEffect');
    setName('Outro nome');
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
}

/* A ordem de execução acima será:
  'Algum nome' -> valor inicial do state
  'Executou useLayoutEffect' -> pois ele roda antes do componente
  'Executou useEffect' -> pois roda com o componente
  'Outro nome' -> pois o useLayoutEffect ainda estava em execução
  'Mudou de novo' - > pois o useEffect finalmente executou por último no componente


  Muito semelhante ao useEffect, porém roda antes de renderizar o componente, ou seja, é um hook SÍNCRONO, bloqueando o carregamento da página para o sucesso da funcionalidade.
  A ideia é executar algo antes que o usuário veja a página.
*/