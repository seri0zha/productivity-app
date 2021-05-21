import React from 'react';
import { useSelector } from 'react-redux';
import AuthContainer from '../../containers/Auth';
import MainContainer from '../../containers/Main';
import { RootState } from '../../store/mainReducer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './styles.module.css';

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return isLoggedIn ? (
    <div className={styles.app}>
      <Header/>
      <Sidebar/>
      <MainContainer/>
    </div>
  ) : (
    <AuthContainer/>
  );
}

export default App;
