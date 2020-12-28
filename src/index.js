import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Admin from './admin';
// import Home from './views/routeDemo/route1/Home';
import Router from './router';
import reportWebVitals from './reportWebVitals';

// StrictMode 严格模式下，弹出对话框等会报警，可去掉<React.StrictMode>

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
