import React, { useRef, useState } from 'react';

export default function UseRefComponent2() {
  const [value, setValue] = useState(0);
  const ref = useRef(0);
  const setRef = () => {
    ref.current += 1;
    console.log('ref:', ref.current);
  };
  const handleValue = () => {
    setValue((prev) => prev + 1);
  };
  return (
    <div>
      <h3>State 값 : {value}</h3>
      <h3>Ref 값 : {ref.current}</h3>
      <button onClick={handleValue}>State</button>
      <button onClick={setRef}>Ref</button>
    </div>
  );
}
