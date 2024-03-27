import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const HeaderComponent = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  const theme = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
  };
  return (
    <div className='headerContainer' style={theme}>
      <h2>헤더</h2>
      {darkMode ? (
        <button className='btn' onClick={toggleDarkMode}>
          😴
        </button>
      ) : (
        <button className='btn' onClick={toggleDarkMode}>
          🙂
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
