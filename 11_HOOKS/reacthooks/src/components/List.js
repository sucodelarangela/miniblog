import { useEffect, useState } from "react";

export const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    // Esse useEffect vai ser reexecutado sempre que o componente pai for re-renderizado. Porém, isso é desnecessário, pois os dados do DB não está tendo seus dados alterados, são sempre os mesmos...
    // Para evitar isso, a função que faz o fetch no componente pai deve ficar em um useCallback com o array de dependências vazio, para que seja renderizado apenas a primeira vez.
    console.log('Buscando itens do DB...');
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      {myItems && myItems.map(item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};
