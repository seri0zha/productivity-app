import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../actions/Todo";
import styles from "./styles.module.css"

interface InputFormProps {
  editorIsDisplayed: boolean,
}

const InputForm: React.FC<InputFormProps> = (props: InputFormProps) => {
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      todoText: '',
    },
    onSubmit: values => {
      dispatch(addTodo({
        text: values.todoText,
        isCompleted: false,
        date: new Date(),
      }));
    }
  })

  if (props.editorIsDisplayed) 
    return (
    <div>
        {props.editorIsDisplayed ? 
        <div>
          <form onSubmit={formik.handleSubmit}>
            <textarea
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
        </div> : ""}
      </div>
  );
  else return <></>;
}

export default InputForm;