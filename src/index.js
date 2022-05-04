import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </Router>
);


