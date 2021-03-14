import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from '../../../../main/store/mainReducer';
import { setLoggedIn as setLoggedInAC } from '../../actions/Auth';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import styles from './styles.module.css';

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const setLoggedIn = bindActionCreators(setLoggedInAC, dispatch);
  
  return isLoggedIn ? (
    <>
      <div className={styles.app}>
        <Header/>
        <Sidebar/>
        <Main/>
      </div>
    </>
  ) : (
    <div>
      LOG IN PLEASE
      <button onClick={() => setLoggedIn(true)}>
        LOG IN
      </button>
    </div>
  );
}

export default App;
