import React from 'react';

export default function Prac01() {
  const names = ['HTML', 'CSS', 'Javascript', 'React'];
  const nameList = names.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div>
      <ul>{nameList}</ul>
    </div>
  );
}
