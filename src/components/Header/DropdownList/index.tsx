import React, {useState, useRef} from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../store/actions/Auth";
import useOutsideClick from "../../../hooks/useOutsideCallback";
import styles from "./styles.module.css";

interface DropdownProps {
  userName: string,
}

const DropdownList: React.FC<DropdownProps> = (props) => {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const [dropdownListIsCollapsed, setDropdownListIsCollapsed] = useState(true);

  const toggleDropdown = () => {
    setDropdownListIsCollapsed(prevstate => !prevstate);
  }

  const clickOutside = () => {
    console.log('outside');
    setDropdownListIsCollapsed(true);
  }
  
  // (ref to element for outside handling, callback for click handle)
  useOutsideClick(dropdownRef, clickOutside);

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
        <div className={styles.titleWrapper}>
          <button className={styles.dropdownElement} onClick={toggleDropdown}>
           {props.userName}
          </button>
        </div>
        {!dropdownListIsCollapsed ? 
        <div className={styles.dropdownList}>
          <button className={styles.dropdownElement} onClick={() => dispatch(setLoggedIn(false))}>
            Logout
          </button>
      </div>:<></>}
    </div>
  )
}

export default DropdownList;