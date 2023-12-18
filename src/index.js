import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Count from './Count';
import ToggleButton from './ToggleButton';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />  react에서 주석은 {/* * /} 표기함   */} 
    {/*<Count />*/}
    <ToggleButton />
  </React.StrictMode>
);
reportWebVitals();

//React.StrictMode : react 내부에서 
// 잠재적인 문제가 있는지 알아내기 위한 도구
//reportWebVitals : react 성능 측정하기 위한 메서드