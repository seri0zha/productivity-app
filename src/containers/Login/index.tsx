import React from "react";
import { setLoggedIn as setLoggedInAC } from '../../store/actions/Login';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../components/Login';
import { FirebaseContext } from '../..';
import firebase from "firebase/app";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const setLoggedIn = bindActionCreators(setLoggedInAC, dispatch);
  const {auth} = React.useContext(FirebaseContext);

  const onLoginButtonClick = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const {user} = await auth.signInWithPopup(provider);
      console.log(user?.displayName);
      setLoggedIn(true);
    } catch(e) {
      console.log(e.message);
    }
  }
  return (
    <Login 
      onLoginButtonClick={onLoginButtonClick}/>
  );
};

export default LoginContainer;