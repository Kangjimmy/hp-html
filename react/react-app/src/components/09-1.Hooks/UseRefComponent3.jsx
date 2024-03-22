import React, { useRef, useState } from 'react';

const UseRefComponent3 = () => {
  const ref = useRef(0);
  const [refresh, setRefresh] = useState(0);
  let curValue = 0;
  return (
    <div>
      <h3>Ref 값 : {ref.current}</h3>
      <h3>CurValue 값 : {curValue}</h3>
      <button
        onClick={() => {
          ref.current += 1;
          console.log('refValue:', ref.current);
        }}
      >
        Ref
      </button>
      <button
        onClick={() => {
          curValue += 1;
          console.log('curValue:', curValue);
        }}
      >
        CurValue
      </button>
      <button onClick={() => setRefresh((prev) => prev + 1)}>Refresh</button>
    </div>
  );
};

export default UseRefComponent3;
