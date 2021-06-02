import React from 'react';
import styles from './styles.module.css';
import { HiMenu } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import { useDispatch } from 'react-redux';
import { toggleCollapsed } from '../../store/actions/Sidebar';
import ProfileButton from './ProfileButton';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleCollapsed());
  }

  return (  
    <header className={styles.header}>
      <button 
        className={styles.menuButton} 
        onClick={toggleSidebar}
        >
        <IconContext.Provider 
          value={{className: styles.menuIcon}}>
          <HiMenu/>
        </IconContext.Provider>
      </button>
      <ProfileButton/>
    </header>
  );
}

export default Header;
