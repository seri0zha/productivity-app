import { ADD_TODO, EDIT_TODO } from "../constants/Todo";
import { TodoType } from "../types";

export const addTodo = (todo: TodoType) => ({
  type: ADD_TODO,
  payload: todo,
});

export const editTodo = (id: string, todo: TodoType) => ({
  type: EDIT_TODO,
  payload: {id, todo}
});