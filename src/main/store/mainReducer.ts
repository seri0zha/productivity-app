import { combineReducers } from "redux";
import authReducer from "../../library/common/reducers/authReducer";
import sidebarReducer from "../../library/common/reducers/sidebarReducer";
import todoReducer from "../../library/common/reducers/todoReducer";

const mainReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof mainReducer>;

export default mainReducer;