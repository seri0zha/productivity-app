import { setLoggedIn as setLoggedInAC } from '../../store/actions/Login';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../components/Login';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const setLoggedIn = bindActionCreators(setLoggedInAC, dispatch);
  const onLoginButtonClick = () => {
    setLoggedIn(true);
  }
  return (
    <Login 
      onLoginButtonClick={onLoginButtonClick}/>
  );
};

export default LoginContainer;