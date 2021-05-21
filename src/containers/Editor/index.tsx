import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addTodo } from "../../store/actions/Todo";
import Editor from "../../components/Editor";

const EditorContainer: React.FC = () => {
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

  const onTextAreaKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (formik.values.todoText) {
        formik.submitForm();
      }
    }
  };

  return (
    <Editor
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      todoText={formik.values.todoText}
      onTextAreaKeyDown={onTextAreaKeyDown}
      resetForm={formik.resetForm}/>
  );
}

export default EditorContainer;
