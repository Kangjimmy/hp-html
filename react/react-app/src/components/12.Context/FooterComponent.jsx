import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const FooterComponent = () => {
  const { darkMode } = useContext(ThemeContext);
  const theme = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
  };
  return (
    <div className='footerContainer' style={theme}>
      <h2>footer</h2>
    </div>
  );
};

export default FooterComponent;
