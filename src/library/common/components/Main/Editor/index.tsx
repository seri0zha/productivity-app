import { useState } from "react";
import styles from "./styles.module.css"
import InputForm from "./InputForm";
import { BsPlus } from "react-icons/bs";

const Editor: React.FC = () => {
  const [editorIsDisplayed, setEditorIsDisplayed] = useState(false);

  return (
    <div className={styles.editor}>
      <InputForm 
        editorIsDisplayed={editorIsDisplayed} 
        setEditorIsDisplayed={setEditorIsDisplayed}/>
      <button
        className={styles.addTodoButton}
        hidden={editorIsDisplayed} 
        onClick={() => setEditorIsDisplayed(true)}
        >
        <BsPlus/>
        Add todo
      </button>
    </div>
  );
}

export default Editor;
