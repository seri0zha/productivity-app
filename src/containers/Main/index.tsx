import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/mainReducer';
import { TodoType } from '../../types/types';
import Todo from '../../components/Todo';
import Main from '../../components/Main';

const getFormattedDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth()+1).toString().padStart(2, '0');
  const fullYear = date.getFullYear().toString();
  return `${day}.${month}.${fullYear}`;
}

const MainContainer: React.FC = () => {

  const todos: {[key: string]: TodoType} = useSelector((state: RootState) => state.todo.todos);
  const allTodosElement = Object.keys(todos).map((key: string) => <Todo key={key} id={key} todo={todos[key]}/>);
  const todayTodosElement = Object.keys(todos)
    .filter(key => getFormattedDate(todos[key].date) === getFormattedDate(new Date()))
    .map((key: string) => <Todo key={key} id={key} todo={todos[key]}/>)
   
  return (
    <Main />
  );
}

export default MainContainer;
