import { useCallback, useState } from "react";

import { List } from "./List";

export const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDb = useCallback(() => {
    return ['a', 'b', 'c'];
  }, []); // useCallback também recebe um array de dependências. Aqui vazio, pois só queremos que execute a primeira vez.

  return (
    <div>
      <h2>useCallback</h2>
      {/* Ao alterarmos o counter, o getItems será re-renderizado e fará desnecessariamente o fetch dos dados mais uma vez, mesmo se não houver alteração nestes. Para evitar isso, colocamos a função num useCallback */}
      <List getItems={getItemsFromDb} />
      <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
}


/*
Usado para memorizar uma função muito complexa (por exemplo), fazendo ela NÃO ser reconstruída a cada renderização de um componente (evitando erros de PERFORMANCE)
*/