import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app'; // Use 'firebase/compat/app' instead of 'firebase/app' for Firebase version 9+
import 'firebase/compat/auth'; // Import the authentication module for Firebase version 9+
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC52tM2h6HzGDeJkZmkjgSXtRODVUSUCMo",
  authDomain: "iskconpuri-guesthouse.firebaseapp.com",
  projectId: "iskconpuri-guesthouse",
  storageBucket: "iskconpuri-guesthouse.appspot.com",
  messagingSenderId: "316548638536",
  appId: "1:316548638536:web:e00c16c169032ffda7b57d",
  measurementId: "G-QN23VJ28YT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = getAuth(firebase.initializeApp(firebaseConfig));
setPersistence(auth, browserLocalPersistence);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
