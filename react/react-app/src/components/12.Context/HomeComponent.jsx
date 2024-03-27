import React from 'react';
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import '../../css/HomeComponent.scss';

const HomeComponent = () => {
  return (
    <div className='homeContainer'>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
