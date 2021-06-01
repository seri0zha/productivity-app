import { SET_LOGGED_IN } from "../constants/Login";

export const setLoggedIn = (loggedIn: boolean) => ({type: SET_LOGGED_IN, payload: loggedIn});
