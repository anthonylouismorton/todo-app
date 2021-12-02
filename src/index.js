import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
//import './index.scss'

function Main() {
    return(
      <App />
      ) 
      
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
