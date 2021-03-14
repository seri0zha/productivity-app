import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../main/store/mainReducer";
import { editTodo } from "../../actions/Todo";
import { TodoType } from "../../types";
import styles from "./styles.module.css"

interface TodoProps{
  id: string,
  todo: TodoType,
}

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const dispatch = useDispatch();
  const isCompleted: boolean = useSelector(
    (state: RootState) => state.todo.todos[props.id].isCompleted
  );

  const onCheckboxChange = () => {
    const newTodo = {...props.todo, isCompleted: !props.todo.isCompleted}
    dispatch(editTodo(props.id, newTodo));
  };

  return (
    <div>
      <input 
        type="checkbox" 
        checked={isCompleted}
        onChange={onCheckboxChange}
        />
      <span className={`${styles.todoText} ${(isCompleted ? styles.completed : "")}`}>
        {props.todo.text}
      </span>
    </div>
  );
}

export default Todo;
