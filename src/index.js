import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
 
 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
 
import WindowContext from './Context/ContextWindowSize';
// import { BrowserRouter, Router } from 'react-router-dom';

 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <WindowContext>
      <Router>
        <App />
      </Router>
    </WindowContext>
  </React.StrictMode>
);

 
