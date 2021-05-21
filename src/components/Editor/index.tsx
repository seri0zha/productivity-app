import React, { ChangeEvent, useState } from "react";
import styles from "./styles.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import EditArea from "../EditArea";
import EditorButton from "../EditorButton";

interface EditorProps {
  handleSubmit: () => void,
  handleChange: (e: ChangeEvent) => void,
  onTextAreaKeyDown: (e: React.KeyboardEvent) => void,
  resetForm: () => void,
  todoText: string,
}

const Editor: React.FC<EditorProps> = (props) => {
  
  const [editorIsDisplayed, setEditorIsDisplayed] = useState(false);

  const onCancelButtonClick = () => {
    setEditorIsDisplayed(false);
    props.resetForm();
  };

  return (
  <>
    {editorIsDisplayed ? 
    <div>
      <form onSubmit={props.handleSubmit}>
        <EditArea 
          value={props.todoText} 
          onChange={props.handleChange}
          name='todoText'
          onTextAreaKeyDown={props.onTextAreaKeyDown}/>
        <EditorButton 
          text="Add todo"
          type="submit"
          disabled={!props.todoText}/>
        <EditorButton 
          text="Cancel"
          type="button"
          onClick={onCancelButtonClick}/>
      </form>
    </div> :
    <button
      className={styles.addTodoButton}
      onClick={() => setEditorIsDisplayed(true)}
      >
      <IconContext.Provider value={{className: styles.addButtonIcon}}>
        <IoIosAddCircleOutline/>
      </IconContext.Provider>
      <span>
        Add todo
      </span>
    </button>}
  </>
  );
}

export default Editor;
