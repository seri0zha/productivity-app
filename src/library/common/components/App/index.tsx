import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../main/store/mainReducer';
import Auth from '../Auth';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import styles from './styles.module.css';

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return isLoggedIn ? (
    <div className={styles.app}>
      <Header/>
      <Sidebar/>
      <Main/>
    </div>
  ) : (
    <Auth/>
  );
}

export default App;
