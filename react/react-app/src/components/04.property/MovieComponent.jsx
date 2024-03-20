import React from 'react';

export default function Movie(props) {
  const { title, open, img } = props;
  const imgStyle = {
    width: '320px',
    height: '400px',
  };
  return (
    <div>
      <h1>영화 제목 : {title}</h1>
      <h3>개봉 : {open}</h3>
      <img style={imgStyle} src={img} alt='이미지' />
      <hr />
    </div>
  );
}
