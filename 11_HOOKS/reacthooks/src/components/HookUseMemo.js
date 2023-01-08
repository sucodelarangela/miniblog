import { useEffect, useMemo, useState } from "react";

export const HookUseMemo = () => {
  const [number, setNumber] = useState(0);
  // const premiumNumbers = ['0', '100', '200']; // exemplo que gera o erro/warning
  const premiumNumbers = useMemo(() => {
    return ['0', '100', '200'];
  }, []); // exemplo corrigido. Os valores serão sempre esses, sem re-renderizações

  // o onChange força a renderização do componente e, consequentemente, do premiumNumbers. Porém, premiumNumbers não está sendo alterado. Para evitar que ele seja sempre executado, temos que envolver premiumNumbers em um useMemo.
  useEffect(() => {
    console.log('Premium numbers foi alterado');
  }, [premiumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ''}
      <hr />
    </div>
  );
}

/*
Garante a referência de um objeto, fazendo com que algo possa ser atrelado a uma referência e não a um valor (seria como dizer que tal objeto é único e terá um id ou chave única que pudesse, baseado nisso, fazer uma manipulação que só esse objeto terá essa possibilidade).
Assim podemos condicionar useEffects a uma variável de maneira mais inteligente.
useMemo e useCallback são bem similares em seus propósitos, sendo que um é para valores e o outros é para funções.
*/