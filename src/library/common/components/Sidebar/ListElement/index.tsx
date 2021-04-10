import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

interface IListElementProps {
  to: string,
  text: string,
  exact?: boolean
}

const ListElement: React.FC<IListElementProps> = (props) => {
  return (
    <NavLink 
      to={props.to} 
      exact={props.exact}
      className={styles.listElement}
      activeClassName={styles.active}
      >
      {props.text}
    </NavLink>
  )
}

export default ListElement;
