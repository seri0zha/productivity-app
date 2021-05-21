import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import todoReducer from "./reducers/todoReducer";

const mainReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof mainReducer>;

export default mainReducer;