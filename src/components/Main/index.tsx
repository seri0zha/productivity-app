import {FC} from 'react';
import styles from './styles.module.css';

const Main: FC = ({children}) => {

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
}

export default Main;
