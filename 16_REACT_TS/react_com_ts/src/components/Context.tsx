import { useContext } from 'react';
import { AppContext } from '../App';

const Context = () => {
  const details = useContext(AppContext);

  return (
    <div>
      <>
        {details && (
          <div>
            <h2>Linguagem: {details.language}</h2>
            <h4>Framework: {details.framework}</h4>
            <p>QTD de projetos: {details.projects}</p>
          </div>
        )}
      </>
    </div>
  );
};

export default Context;