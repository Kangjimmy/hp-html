import React from 'react';

export default function PriceList(props) {
  const { prices } = props;
  return (
    <div>
      <h3>가격 목록</h3>
      {prices}
    </div>
  );
}
