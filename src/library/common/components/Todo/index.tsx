import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../actions/Todo";
import { TodoType } from "../../types";
import styles from "./styles.module.css"

interface TodoProps{
  id: string,
  todo: TodoType,
}

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const dispatch = useDispatch();
  const onCheckboxChange = () => {
    const newTodo = {...props.todo, isCompleted: !props.todo.isCompleted}
    dispatch(editTodo(props.id, newTodo));
  };

  return (
    <div className={styles.todoElement}>
      <input 
        className={styles.checkbox}
        type="checkbox" 
        checked={props.todo.isCompleted}
        onChange={onCheckboxChange}
        />
      <div className={`${styles.todoText} ${(props.todo.isCompleted ? styles.completed : "")}`}>
        {props.todo.text}
      </div>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => dispatch(deleteTodo(props.id))}
          >
          delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
