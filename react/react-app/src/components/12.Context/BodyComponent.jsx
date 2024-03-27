import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const BodyComponent = () => {
  const { darkMode } = useContext(ThemeContext);
  const theme = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
  };
  return (
    <div className='bodyContainer' style={theme}>
      <h2>메인</h2>
    </div>
  );
};

export default BodyComponent;
