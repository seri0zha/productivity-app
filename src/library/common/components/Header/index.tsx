import React from 'react';
import styles from './styles.module.css';
import { HiMenu } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoggedIn } from '../../actions/Auth';
import { toggleCollapsed } from '../../actions/Sidebar';

const Header: React.FC = () => {

  const dispatch = useDispatch();
  const boundActionCreators = bindActionCreators({
    setLoggedIn,
    toggleCollapsed
  }, dispatch);
  return (
    <div className={styles.header}>
      <button 
        className={styles.menuButton} 
        onClick={() => boundActionCreators.toggleCollapsed()}
        >
        <IconContext.Provider value={{className: styles.menuIcon}}>
          <HiMenu/>
        </IconContext.Provider>
      </button>
      <button onClick={() => boundActionCreators.setLoggedIn(false)}>
        LOG OUT
      </button>
    </div>
  );
}

export default Header;
