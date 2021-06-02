import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import store from './store';
import firebase from "firebase";

const fbConfig = {
  apiKey: "AIzaSyBIbnFc5xUvuIwlJEwwaIOWHd_NDOULA4Y",
  authDomain: "easyflozy.firebaseapp.com",
  databaseURL: "https://easyflozy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "easyflozy",
  storageBucket: "easyflozy.appspot.com",
  messagingSenderId: "775261774495",
  appId: "1:775261774495:web:5c03ff26825bd78115f8aa",
  measurementId: "G-J004FZPX7V"
}

firebase.initializeApp(fbConfig);

const auth = firebase.auth();
export const FirebaseContext = React.createContext({
  firebase,
  auth,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <FirebaseContext.Provider value={{
          firebase,
          auth,
        }}>
          <App />
        </FirebaseContext.Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
