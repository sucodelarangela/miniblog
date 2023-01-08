import { usePrevious } from "hooks/usePrevious";
import { useState } from "react";

export const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div>
      <h2>Custom hook</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random().toFixed(2))}>Alterar</button>
      <hr />
    </div>
  );
};
