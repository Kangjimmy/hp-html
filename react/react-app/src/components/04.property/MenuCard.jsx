import React from 'react';
import '../../css/menuCard.css';

export default function MenuCard(menu) {
  const { img, name, type, price } = menu;
  return (
    <div className='cardBox' style={{ backgroundColor: '#FFF8DC' }}>
      <img className='imgBox' src={img} alt='food_img' />
      <h3>{name}</h3>
      <h4>{type}</h4>
      <h3>{price}</h3>
    </div>
  );
}
