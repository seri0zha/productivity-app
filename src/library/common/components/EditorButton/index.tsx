import React from "react";
import styles from "./styles.module.css";

interface EditorButtonProps {
  type: "button" | "submit" | "reset" | undefined,
  text: string,
  disabled?: boolean,
  onClick?: () => void,
  className?: string,
}

const EditorButton: React.FC<EditorButtonProps> = (props) => {
  return (
    <button 
      className={props.className ? props.className : styles.editorButton} 
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default EditorButton;