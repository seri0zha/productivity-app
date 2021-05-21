import { SET_LOGGED_IN } from "../constants/Auth";

interface IAction {
  type: string,
  payload: any,
}

export interface IAuthState {
  isLoggedIn: boolean
}

const initialState: IAuthState = {
  isLoggedIn: false,
}

const authReducer = (state = initialState, action: IAction) => {
  switch(action.type) {
    case SET_LOGGED_IN: 
      return {
        ...state,
        isLoggedIn: action.payload
      }
    default: 
      return state;
  }
};

export default authReducer;