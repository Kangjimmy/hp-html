import React, { useContext } from 'react';
import Pr01Context from '../../context/ContextPr01';

const ContextPr01 = () => {
  const contextColor = useContext(Pr01Context);
  const style = {
    backgroundColor: contextColor,
    width: '100%',
    height: '100vh',
  };
  return <div style={style}></div>;
};

export default ContextPr01;
