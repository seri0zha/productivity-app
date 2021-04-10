import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { RootState } from '../../../../main/store/mainReducer';
import { TodoType } from '../../types';
import Todo from '../Todo';
import Editor from '../Editor';
import styles from './styles.module.css';

const Main: React.FC = () => {

  const todos: {[key: string]: TodoType} = useSelector((state: RootState) => state.todo.todos);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <Switch>
          <Route path="/today">
            <h2 className={styles.title}>
              Today
            </h2>
          </Route>
          <Route path="/history">
            <h2 className={styles.title}>
              History
            </h2>
          </Route>
          <Route path="/">
            <h2 className={styles.title}>
              General
            </h2>
            {Object.keys(todos).map((key: string) => <Todo key={key} id={key} todo={todos[key]}/>)}
            <Editor/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Main;
