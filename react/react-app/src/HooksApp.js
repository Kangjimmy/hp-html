import React, { useCallback, useEffect, useState } from 'react';
import AddName from './components/09-1.Hooks/AddName';
import UseRefComponent1 from './components/09-1.Hooks/UseRefComponent1';
import UseRefComponent2 from './components/09-1.Hooks/UseRefComponent2';
import UseRefComponent3 from './components/09-1.Hooks/UseRefComponent3';
import UseRefDom from './components/09-1.Hooks/UseRefDom';
import InputValue from './components/09-1.Hooks/InputValue';
import UseMemoComponent from './components/09-2.Hooks/UseMemoComponent';
import UseCallBackComponent1 from './components/09-2.Hooks/UseCallBackComponent1';
import UseCallbackComponent2 from './components/09-2.Hooks/UseCallbackComponent2';
import ChildComponent from './components/09-2.Hooks/ChildComponent';
import Pr01 from './components/09-2.Hooks/Pr01';
import Pr02 from './components/09-2.Hooks/Pr02';
import Pr03 from './components/09-2.Hooks/Pr03';
import Pr04 from './components/09-2.Hooks/Pr04';

export default function HooksApp() {
  const [count, setCount] = useState(0);
  const updateHandler = useCallback(() => {
    console.log('update');
  }, []);

  return (
    <div>
      {/* <AddName /> */}
      {/* <UseRefComponent1 /> */}
      {/* <UseRefComponent2 /> */}
      {/* <UseRefComponent3 /> */}
      {/* <UseRefDom /> */}
      {/* <InputValue /> */}
      {/* <UseMemoComponent /> */}
      {/* <UseCallBackComponent1 /> */}
      {/* <UseCallbackComponent2 /> */}
      {/* <div>
        <input type='number' onChange={(e) => setCount(e.target.value)} />
        <ChildComponent update={updateHandler} />
      </div> */}

      {/* Hook 1 문제 모음 */}
      {/* <Pr01 /> */}
      {/* <Pr02 /> */}
      {/* <Pr03 /> */}
      <Pr04 />
    </div>
  );
}
