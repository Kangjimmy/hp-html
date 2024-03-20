import React from 'react';

export default function ChildComponent(props) {
  function updateText(e) {
    props.onChangeText(e.target.value);
  }
  return (
    <div>
      <h3>
        입력 : <input type='text' onChange={updateText} />
      </h3>
    </div>
  );
}
