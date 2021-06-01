import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../Routes";
import { LOGIN_PATH, TODOS_LIST_PATH } from "../../store/constants/Routes";
import { RootState } from "../../store/mainReducer";
import GridWrapper from "../GridWrapper";
import Header from "../Header";
import Main from "../Main";
import Sidebar from "../Sidebar";

const AppRouter = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return isLoggedIn ? (
    <GridWrapper>
      <Header/>
      <Sidebar/>
      <Main>
        <Switch>
          {privateRoutes.map(({path, Component}) => 
            <Route path={path} render={() => <Component/>} exact={true}/>
          )}
          <Redirect to={TODOS_LIST_PATH}/>
        </Switch>
      </Main>
    </GridWrapper>
  ) : (
    <Switch>
      {publicRoutes.map(({path, Component}) => 
        <Route path={path} render={() => <Component/>} exact={true}/>
      )}
      <Redirect to={LOGIN_PATH}/>
    </Switch>
  );
}

export default AppRouter; 