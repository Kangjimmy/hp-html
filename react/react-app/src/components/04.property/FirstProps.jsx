import React from 'react';

export default function FirstProps(props) {
  const { name, color } = props;
  return (
    <div>
      <h1>
        제 이름은 <span style={{ backgroundColor: 'yellowgreen' }}>{name}</span>
        입니다.
      </h1>
      <h1>
        제가 좋아하는 색은{' '}
        <span style={{ backgroundColor: 'green' }}>{color}</span>입니다.
      </h1>
    </div>
  );
}
