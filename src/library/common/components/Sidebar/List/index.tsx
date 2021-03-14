import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const List: React.FC = () => {
  return (
    <>
      <NavLink 
         exact
         className={styles.listElement}
         activeClassName={styles.active} 
         to="/" 
         >
        Today
      </NavLink>
      <NavLink 
        className={styles.listElement} 
        activeClassName={styles.active}
        to="/general" >
        General
      </NavLink>
      <div>
        Categories
      </div>
    </>
  )
}

export default List;
