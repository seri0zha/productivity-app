import React from 'react';
import { setLoggedIn as setLoggedInAC } from '../../store/actions/Auth';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from '../../components/Auth';

const AuthContainer = () => {
  const dispatch = useDispatch();
  const setLoggedIn = bindActionCreators(setLoggedInAC, dispatch);
  const onLoginButtonClick = () => {
    setLoggedIn(true);
  }
  return (
    <Auth 
      onLoginButtonClick={onLoginButtonClick}/>
  );
};

export default AuthContainer;