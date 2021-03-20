import React from 'react';
import styles from './styles.module.css';
import { ImCheckmark } from 'react-icons/im';
interface CheckButtonProps {
  onClick: () => void,
  checked: boolean
}

const CheckButton: React.FC<CheckButtonProps> = (props: CheckButtonProps) => {
  return (
    <button 
      className={`${styles.checkButton} ${props.checked ? styles.checked: ''}`} 
      onClick={props.onClick}>
      {props.checked ? <ImCheckmark/> : ''}
    </button>
  );
}

export default CheckButton;