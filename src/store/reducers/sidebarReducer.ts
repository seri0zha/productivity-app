import { TOGGLE_COLLAPSED } from "../constants/Sidebar";

const initialState = {
  isCollapsed: false
};

const sidebarReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case TOGGLE_COLLAPSED: 
      return {...state, isCollapsed: !state.isCollapsed};
    default: 
      return state;
  }
};

export default sidebarReducer;