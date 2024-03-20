import React, { useState } from 'react';

export default function CheckBox(props) {
  const itemArr = props.itemArr;
  const [total, setTotal] = useState(0);
  const totalHandler = (e) => {
    if (e.target.checked) {
      setTotal((prev) => prev + parseInt(e.target.value));
    } else {
      setTotal((prev) => prev - parseInt(e.target.value));
    }
  };
  return (
    <div>
      {itemArr.map((item) => (
        <label htmlFor={item.name} key={item.name}>
          <input
            type='checkbox'
            name={item.name}
            id={item.name}
            value={item.price}
            onChange={totalHandler}
          />
          {item.name} {item.price}만원
          <br />
        </label>
      ))}
      <p>합계:{total}</p>
    </div>
  );
}
