import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../main/store/mainReducer';
import List from './List';
import styles from './styles.module.css';

const Sidebar: React.FC = () => {
  
  const isCollapsed = useSelector((state: RootState) => state.sidebar.isCollapsed);
  useEffect(() => {
    console.log(isCollapsed);
  },[isCollapsed]);
  
  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.hidden : ""}`}>
      <List/>
    </div>
  );
}

export default Sidebar;
