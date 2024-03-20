import React from 'react';
import './App.css';
import DefaultProps from './components/04.property/DefaultProps';
import Wrapper from './components/04.property/Wrapper';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import PropTypesComponent from './components/04.property/PropTypesComponent';
import Movie from './components/04.property/MovieComponent';
import TodoTask from './components/TodoTask';
import PriceList from './components/04.property/PriceList';
import MenuCard from './components/04.property/MenuCard';
import Props2 from './components/04.property/Props2';
import ChildComponent from './components/04.property/ChildComponent';
import Prac01 from './components/04.property/Prac01';

function App() {
  const movieList = [
    {
      title: '웡카',
      open: '2024.01.31',
      img: 'https://www.viva100.com/mnt/images/file/2024y/02m/08d/2024020801000611800026541.jpg',
    },
    {
      title: '파묘',
      open: '2024.02.22',
      img: 'https://i.namu.wiki/i/EWdG2Jtlu36U1-03moAiO7Hmh1waKlbB0DIEvamksSTTzWCsqDXxUiiPSdcmpAQjh_tUFOwAGhR7LX7f6U0wXQ.webp',
    },
    {
      title: '듄:파트2',
      open: '2024.02.28',
      img: 'https://i.namu.wiki/i/OHj59ojnhpp9PdEkNrBxENXjGFj4zUbWTCQwwmCV74LfsIabB8WvuCeVRcnGIGpnpgoN60opfYgIpvEsUfGnHQ.webp',
    },
  ];
  const todoList = [
    { takeName: '빨래하기', isFinished: false },
    { takeName: '공부하기', isFinished: true },
  ];
  const priceList = [1000, 2000, 3000, 4000];
  const prices = priceList.map((price) => <div>가격: {price}원</div>);
  const menu = [
    {
      img: 'https://www.eatingwell.com/thmb/EujRIPyRqlpWQNvkJUgyBN9Xoeo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spaghetti-and-spinach-with-sun-dried-tomato-cream-sauce-98bd4c19277a4cb3926e072fd6f2d947.jpg',
      name: 'Spaghetti',
      type: 'pasta',
      price: '15,000',
    },
    {
      img: 'https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/Pepperoni-Pizza-1.jpg',
      name: 'Pepperoni',
      type: 'pizza',
      price: '25,000',
    },
    {
      img: 'https://www.cookingclassy.com/wp-content/uploads/2022/07/grilled-steak-15.jpg',
      name: 'Rib Eye Steak',
      type: 'steak',
      price: '45,000',
    },
  ];
  return (
    <div>
      {/* {movieList.map((item, index) => (
        <Movie key={index} title={item.title} open={item.open} img={item.img} />
      ))} */}
      {/* {todoList.map((item, index) => (
        <TodoTask key={item.takeName} taskName={item.takeName} />
      ))} */}
      {/* <PriceList prices={prices} /> */}
      <div style={{ display: 'flex', gap: '20px', padding: '10px' }}>
        {menu.map((item, index) => (
          <MenuCard
            key={index}
            img={item.img}
            name={item.name}
            type={item.type}
            price={item.price}
          />
        ))}
      </div>
      <Props2
        age={29}
        address={'경기도 용인'}
        color={{
          blue: 'blue',
          red: 'red',
          orange: 'orange',
          yellow: 'yellow',
          green: 'green',
        }}
      />
      <ChildComponent>리액트</ChildComponent>
      <Prac01 />
    </div>
  );
}

export default App;
