import React from 'react';
import styles from './styles.module.css';
import { setLoggedIn as setLoggedInAC } from '../../actions/Auth';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
const Auth = () => {
  const dispatch = useDispatch();
  const setLoggedIn = bindActionCreators(setLoggedInAC, dispatch);
  const onLoginButtonClick = () => {
    setLoggedIn(true);
  }
  return (
    <div className={styles.wrapper}>
      Log in with
      <div className={styles.buttonWrapper}>
        <button 
          onClick={onLoginButtonClick} 
          className={styles.authButton}>
          <FcGoogle/>
          <span className={styles.buttonText}>
            Google
          </span>
        </button>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.authButton}>
          <AiFillGithub />
          <span className={styles.buttonText}>
            Github
          </span>
        </button>
      </div> 
    </div>
  );
}

export default Auth;