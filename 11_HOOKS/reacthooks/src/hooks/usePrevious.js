import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

// Custom hook para salvar o estado antigo de um valor caso precisemos usar futuramente