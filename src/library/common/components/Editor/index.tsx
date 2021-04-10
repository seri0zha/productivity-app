import React, { useState } from "react";
import styles from "./styles.module.css"
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addTodo } from "../../actions/Todo";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons/lib";

const Editor: React.FC = () => {
  const [editorIsDisplayed, setEditorIsDisplayed] = useState(false);
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      todoText: '',
    },
    onSubmit: (values, {resetForm}) => {
      resetForm();
      dispatch(addTodo({
        text: values.todoText,
        isCompleted: false,
        date: new Date(),
      }));
    }
  });

  const onCancelButtonClick = () => {
    setEditorIsDisplayed(false);
    formik.resetForm();
  };

  const onTextAreaKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      formik.submitForm();
    }
  };

  return (
  <>
    {editorIsDisplayed ? 
    <div>
      <form onSubmit={formik.handleSubmit}>
        <textarea
          onKeyDown={onTextAreaKeyDown}
          spellCheck="false"
          placeholder="To do something..."
          className={styles.todoTextarea}
          value={formik.values.todoText} 
          onChange={formik.handleChange} 
          name='todoText'>
        </textarea>
        <input 
          className={styles.editorButton}
          disabled={!formik.values.todoText}
          type="submit"
          value="Add todo"/>
        <button 
          className={styles.editorButton}
          onClick={onCancelButtonClick}>
          Cancel
        </button>
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
