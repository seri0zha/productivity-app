import uniqid from "uniqid";
import { ADD_TODO, EDIT_TODO } from "../constants/Todo";
import { TodoType } from "../types";

interface TodoState {
  todos: {
    [key: string]: TodoType
  },
  categories: any
}

const initialState: TodoState = {
  todos: {
    "1": {text: "To do a todo list", isCompleted: false, date: new Date()},
    "2": {text: "One more simple todo", isCompleted: false, date: new Date()},
  },
  categories: [
    
  ]
};

const todoReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case ADD_TODO: {
      let newState = {
        ...state,
        todos: {
          ...state.todos,
          [uniqid()]: {...action.payload}
        },
      };
      return newState;
    }
    case EDIT_TODO: 
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: action.payload.todo,
        }
      }
    default: 
      return state;
  }
};

export default todoReducer;