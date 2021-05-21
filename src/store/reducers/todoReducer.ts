import uniqid from "uniqid";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../constants/Todo";
import { TodoType } from "../../types/types";

interface TodoState {
  todos: {
    [key: string]: TodoType
  },
  categories: any
}

const initialState: TodoState = {
  todos: {},
  categories: []
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
    case DELETE_TODO: {
      let newState = {
        ...state,
        todos: {...state.todos}
      };
      // removes todo by id from action payload
      delete newState.todos[action.payload];
      return newState;
    }
    default: 
      return state;
  }
};

export default todoReducer;