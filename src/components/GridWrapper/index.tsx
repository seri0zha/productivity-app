import { FC } from "react";
import styles from "./styles.module.css";

const GridWrapper: FC = ({children}) => {
  return (
    <div className={styles.gridWrapper}>
      { children }
    </div>
  )
}

export default GridWrapper;