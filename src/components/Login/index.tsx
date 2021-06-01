import React from 'react';
import styles from './styles.module.css';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

interface LoginProps {
  onLoginButtonClick: () => void,
}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      Log in with
      <div className={styles.buttonWrapper}>
        <button 
          onClick={props.onLoginButtonClick} 
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
};

export default Login;