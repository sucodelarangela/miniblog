import { useRef } from "react";
import { SomeComponent } from "./SomeComponent";

export const HookUseImperativeHandle = () => {
  const componentRef = useRef();
  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validar!</button> {/*esse botão irá validar o input do componente filho*/}
      <hr />
    </div>
  );
};

/*
  Permite acionar ações em um outro componente de forma imperativa.
  Como não podemos passar refs como props, precisamos usar uma função 'forwardRef', que nos permite passar as referências.
*/