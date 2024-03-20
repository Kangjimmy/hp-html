import React from 'react';

export default function Props2({ name, age, address, color }) {
  return (
    <div>
      <h2>
        안녕하세요 제 이름은{' '}
        <span
          style={{ color: `${color.blue}`, backgroundColor: `${color.yellow}` }}
        >
          {name}
        </span>
        입니다.
      </h2>
      <h2>
        저는{' '}
        <span
          style={{ color: `${color.red}`, backgroundColor: `${color.green}` }}
        >
          {age}
        </span>
        살이고,{' '}
        <span style={{ color: color.orange, backgroundColor: `${color.blue}` }}>
          {address}
        </span>
        에 살고 있습니다.
      </h2>
    </div>
  );
}
Props2.defaultProps = {
  name: '강인섭',
};
