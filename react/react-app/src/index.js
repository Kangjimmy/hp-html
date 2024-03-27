import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateApp from './StateApp';
import EventHookApp from './EventHookApp';
import ComponentStylingApp from './ComponentStylingApp';
import HooksApp from './HooksApp';
import ContextApp from './ContextApp';
import { Provider } from 'react-redux';
import store from './store/store.js';
import store2 from './store/store2.js';
import ReduxApp from './ReduxApp.js';
import ReduxApp2 from './ReduxApp2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <StateApp />
  // <EventHookApp />
  // <ComponentStylingApp />
  // <HooksApp />
  // <ContextApp />
  // <Provider store={store}>
  //   <ReduxApp />
  // </Provider>
  <Provider store={store2}>
    <ReduxApp2 />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
