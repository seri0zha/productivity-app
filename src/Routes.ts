import React from "react";
import StarredTodos from "./components/StarredTodos";
import TodosList from "./components/TodosList";
import LoginContainer from "./containers/Login";
import { STARRED_PATH, LOGIN_PATH, TODOS_LIST_PATH } from "./store/constants/Routes";

interface Route {
  path: string,
  Component: React.ComponentType
}

export const publicRoutes: Route[] = [
  {
    path: LOGIN_PATH,
    Component: LoginContainer
  }
];

export const privateRoutes: Route[] = [
  {
    path: TODOS_LIST_PATH,
    Component: TodosList
  },
  {
    path: STARRED_PATH,
    Component: StarredTodos,
  }
]