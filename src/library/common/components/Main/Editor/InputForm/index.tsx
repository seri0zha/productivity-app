import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../actions/Todo";
import styles from "./styles.module.css"

interface InputFormProps {
  editorIsDisplayed: boolean,
  setEditorIsDisplayed: React.Dispatch<React.SetStateAction<boolean>>,
}

const InputForm: React.FC<InputFormProps> = (props: InputFormProps) => {
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
    props.setEditorIsDisplayed(false);
    formik.resetForm();
  };

  const onTextAreaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      formik.submitForm();
    }
  };

  if (props.editorIsDisplayed)
    return (
    <div>
        {props.editorIsDisplayed ? 
        <div>
          <form onSubmit={formik.handleSubmit}>
            <textarea
              onKeyDown={(e) => onTextAreaKeyDown(e)}
              spellCheck="false"
              placeholder="To do something..."
              className={styles.todoTextarea}
              value={formik.values.todoText} 
              onChange={formik.handleChange} 
              name='todoText'>
            </textarea>
            <input 
              disabled={!formik.values.todoText}
              type="submit" 
              value="Add todo"/>
          </form>
          <button onClick={onCancelButtonClick}>
            Cancel
          </button>
        </div> : ""}
      </div>
  );
  else 
    return <></>;
}

export default InputForm;