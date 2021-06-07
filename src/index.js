import React from 'react';
import firebase from 'firebase/app';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

firebase.initializeApp({
  apiKey: 'AIzaSyCoImiNmsGiaVfeCebIqtexvvedCy2exM8',
  authDomain: 'smashing-four-cc11a.firebaseapp.com',
  projectId: 'smashing-four-cc11a',
  storageBucket: 'smashing-four-cc11a.appspot.com',
  messagingSenderId: '209783305968',
  appId: '1:209783305968:web:7c49fe168ecbae3554b435',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
