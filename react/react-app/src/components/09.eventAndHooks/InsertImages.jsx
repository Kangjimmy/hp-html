import React from 'react';
import image from './images/jajang.jpeg';

export default function InsertImages() {
  const style = {
    width: '300px',
    height: '220px',
  };
  return (
    <div>
      <h1>이미지 추가하기</h1>
      <img style={style} src={image} alt='자장면사진' />
      <br />
      <img style={style} src={require('./images/jajang.jpeg')} alt='자장면' />
      <br />
      <img style={style} src='/images/jjambbong.webp' alt='짬뽕' />
      <br />
      <img
        style={style}
        src='https://i.namu.wiki/i/upNZ7cYsFsAfU0KcguO6OHMK68xC-Bj8EXxdCti61Jhjx10UCBgdK5bZCEx41-aAWcjWZ5JMKFUSaUGLC1tqWg.webp'
        alt='짬뽕'
      />
    </div>
  );
}
