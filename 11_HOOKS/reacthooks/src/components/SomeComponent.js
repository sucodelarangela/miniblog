import { useImperativeHandle } from "react";
import { forwardRef, useRef } from "react";

// para usar o ref evniado como props no componente pai, devemos envolver o componente filho no forwardRef
export const SomeComponent = forwardRef((props, ref) => {
  const localInputRef = useRef();

  // função para permitir que a ref seja atualizada pelo outro componente
  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = '';
        }
      }
    };
  });

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localInputRef} /> {/*Esse input será validado pelo botão no componente pai*/}
    </div>
  );
});
