import { useContext } from 'react';
import { AbstractButtonModalForm } from "./AbstractButtonModalForm";
import { Login } from './Login';
import { Signup } from './Signup';
import { UserContext } from '../../ctx/user';
import API from '../../api/requests';

export const LoginForm = (props) => {
  const [, setUser] = useContext(UserContext);
  const handler = async (values) => {
    const res = await API.signin(values);
    setUser(res.data?.user);
    localStorage.setItem('auth-access', res.data?.tokens?.access);
    localStorage.setItem('auth-refresh', res.data?.tokens?.refresh);
  };
  return (
    <AbstractButtonModalForm formComponent={Login} text={'Login'} onSuccess={handler} />
  );
};

export const SignupForm = (props) => {
  const [, setUser] = useContext(UserContext);
  const handler = async (values) => {
    const res = await API.signup(values);
    setUser(res.data?.user);
    localStorage.setItem('auth-access', res.data?.tokens?.access);
    localStorage.setItem('auth-refresh', res.data?.tokens?.refresh);
  };
  return (
    <AbstractButtonModalForm
      formComponent={Signup}
      text={'Signup'}
      onSuccess={handler}
    />
  );
};
