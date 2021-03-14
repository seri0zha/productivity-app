import { useState } from "react";
import styles from "./styles.module.css"
import InputForm from "./InputForm";

const Editor: React.FC = () => {
  const [editorIsDisplayed, setEditorIsDisplayed] = useState(false);
  return (
    <div className={styles.editor}>
      <InputForm editorIsDisplayed={editorIsDisplayed}/>
      <button
        hidden={editorIsDisplayed} 
        onClick={() => setEditorIsDisplayed(true)}
        >
        Add todo
      </button>
      {editorIsDisplayed ? 
        <button 
          onClick={() => setEditorIsDisplayed(false)}
          >
          Cancel
        </button> : 
        ""}
    </div>
  );
}

export default Editor;
