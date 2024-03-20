import React from 'react';

export default function ChangePropsValue(props) {
  let name = props.name;
  function changeName() {
    name = 'React';
    console.log(name);
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>클릭</button>
    </div>
  );
}
