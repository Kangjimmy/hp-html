import React, { useState } from 'react';
import ChangePropsValue from './components/05.state/ChangePropsValue';
import Hello from './components/05.state/Hello';
import ChangeFont from './components/05.state/ChangeFont';
import EventClick from './components/05.state/EventClick';
import ChangeValue from './components/05.state/ChangeValue';
import Spread from './components/05.state/Spread';
import ChangeArray from './components/05.state/ChangeArray';
import ChildComponent from './components/05.state/ChildComponent';
import Pr01_02 from './components/05.state/Pr01_02';
import Pr03 from './components/05.state/Pr03';
import Pr04 from './components/05.state/Pr04';
import Pr05 from './components/05.state/Pr05';
import Counter from './components/05.state/Counter';

export default function StateApp() {
  // state 끌어올리기
  const [text, setText] = useState('');
  function changeTextHandler(text) {
    setText(text);
  }
  return (
    <div>
      {/* <ChangePropsValue name={'jimmy'} /> */}
      {/* <Hello /> */}
      {/* <ChangeFont /> */}
      {/* <EventClick /> */}
      {/* <ChangeValue /> */}
      {/* <Spread /> */}
      {/* <ChangeArray /> */}

      {/* <div id='state끌어올리기'>
        <h3>ChildComponent로부터 전달받는 데이터 : {text}</h3>
        <ChildComponent onChangeText={changeTextHandler} />
      </div> */}
      {/* <Pr01_02 />
      <hr />
      <Pr03 />
      <hr />
      <Pr04 />
      <hr />
      <Pr05 />
      <hr /> */}
      <Counter />
    </div>
  );
}
