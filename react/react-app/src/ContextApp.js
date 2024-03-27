import React, { useContext, useState } from 'react';
import { MyContext } from './context/Context01';
import HomeComponent from './components/12.Context/HomeComponent';
import { ThemeContext } from './context/ThemeContext';
import Counter from './components/09-3.Hooks/Counter';
import Pr01 from './components/09-3.Hooks/Pr01';
import Pr02 from './components/09-3.Hooks/Pr02';
import ContextPr01 from './components/12.Context/ContextPr01';
import Pr01Context from './context/ContextPr01';

const ContextApp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = prompt('원하는 색상을 입력하세요.');
  console.log(color);
  return (
    <>
      {/* <Pr01 /> */}
      {/* <Pr02 /> */}

      <Pr01Context.Provider value={color}>
        <ContextPr01 />
      </Pr01Context.Provider>
    </>
    // <MyContext.Provider value='Hello World!'>
    // <GrandParent />
    // </MyContext.Provider>
    // <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
    //   <HomeComponent />
    // </ThemeContext.Provider>
  );
};

function GrandParent() {
  return <Parent />;
}
function Parent() {
  return <Child />;
}
function Child() {
  return <Message />;
}
function Message() {
  const msg = useContext(MyContext);
  return <div>전달받은 데이터 : {msg}</div>;
}

export default ContextApp;
