import React from 'react';
import { Route, Switch } from 'react-router';
import styles from './styles.module.css';
import EditorContainer from '../../containers/Editor';

interface MainProps {
  currentDate: string,
  todayTodosElement: JSX.Element[],
  allTodosElement: JSX.Element[],
}

const Main: React.FC<MainProps> = (props) => {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <Switch>
          <Route path="/today">
            <h2 className={styles.title}>
              Today
            </h2>
            {props.currentDate}
            {props.todayTodosElement}
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
            {props.allTodosElement}
            <EditorContainer/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Main;
