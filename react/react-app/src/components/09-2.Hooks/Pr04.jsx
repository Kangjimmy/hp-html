import React, { useRef, useState } from 'react';

const Pr04 = () => {
  const [text, setText] = useState('');
  const tt = useRef('');

  return (
    <div>
      <input type='text' ref={tt} />
      <button
        onClick={() => {
          setText(tt.current);
          console.log('랜더링 완료');
        }}
      >
        전송
      </button>
      <br />
      <h3>전송된 단어 : {text}</h3>
    </div>
  );
};

export default Pr04;
