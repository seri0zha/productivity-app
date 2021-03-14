import { createStore } from "redux";
import mainReducer from "./mainReducer";

const store = createStore(mainReducer);
export default store;
