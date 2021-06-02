import React, {useState, useRef} from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../store/actions/Login";
import useOutsideClick from "../../../hooks/useOutsideCallback";
import styles from "./styles.module.css";
import { FirebaseContext } from "../../..";
import { useAuthState } from "react-firebase-hooks/auth";

const ProfileButton: React.FC = () => {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const [dropdownListIsCollapsed, setDropdownListIsCollapsed] = useState(true);
  const {auth} = React.useContext(FirebaseContext);
  const [user] = useAuthState(auth);
  const toggleDropdown = () => {
    setDropdownListIsCollapsed(prevstate => !prevstate);
  }

  const clickOutside = () => {
    console.log('outside');
    setDropdownListIsCollapsed(true);
  }

  const onLogoutButtonClick = async () => {
    await auth.signOut();
    dispatch(setLoggedIn(false));
  }
  
  // (ref to element for outside handling, callback for click handle)
  useOutsideClick(dropdownRef, clickOutside);

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
        <div className={styles.titleWrapper}>
          <button className={styles.dropdownElement} onClick={toggleDropdown}>
           {user?.displayName}
          </button>
        </div>
        {!dropdownListIsCollapsed ? 
        <div className={styles.dropdownList}>
          <button className={styles.dropdownElement} onClick={onLogoutButtonClick}>
            Logout
          </button>
      </div>:<></>}
    </div>
  )
}

export default ProfileButton;