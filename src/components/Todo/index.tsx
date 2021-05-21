import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../store/actions/Todo";
import { TodoType } from "../../types/types";
import CheckButton from "../CheckButton";
import styles from "./styles.module.css"
import { FiDelete } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

interface TodoProps{
  id: string,
  todo: TodoType,
}

const Todo: React.FC<TodoProps> = ({id, todo}) => {
  const dispatch = useDispatch();
  const onCheckboxChange = () => {
    const newTodo = {...todo, isCompleted: !todo.isCompleted}
    dispatch(editTodo(id, newTodo));
  };

  const onDeleteButtonClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.todoElement}>
      <CheckButton 
        onClick={onCheckboxChange}
        checked={todo.isCompleted}
      />
      <div className={`${styles.todoText} ${(todo.isCompleted ? styles.completed : "")}`}>
        {todo.text}
      </div>
      <div className={styles.buttonGroup}>
        <button
          onClick={onDeleteButtonClick}
          className={styles.todoSideButton}
        >
          <IconContext.Provider value={{className: styles.deleteIcon}}>
            <FiDelete/>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default Todo;
