import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './component/app/App';

ReactDOM.render(
  <React.StrictMode>
      <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
