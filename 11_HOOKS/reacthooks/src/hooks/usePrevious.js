import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  // useDebugValue permite depurar um valor sem console.log. Deve ser usado com React Dev Tools no browser.
  useDebugValue('--- CUSTOM HOOK E USEDEBUGVALUE ---');
  useDebugValue("O número anterior é: " + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

// Custom hook para salvar o estado antigo de um valor caso precisemos usar futuramente