import { useContext, useState } from 'react';
import { Button } from 'antd';
import { ModalForm } from './ModalForm';
import { Login } from './Login';
import { Signup } from './Signup';
import { UserContext } from '../../ctx/user';
import API from '../../api/requests';

const ButtonFormBody = (props) => {
  const { text, formComponent, onSuccess } = props;

  const modalControls = useState(false);
  const [, setOpen] = modalControls;
  const openModal = () => setOpen(true);

  return (
    <>
      <Button onClick={openModal}>{text}</Button>
      <ModalForm
        controls={modalControls}
        formComponent={formComponent}
        onSuccess={onSuccess}
      />
    </>
  );
};

export const LoginForm = (props) => {
  const [, setUser] = useContext(UserContext);
  const handler = async (values) => {
    const res = await API.signup(values);
    setUser(res.body?.data?.user);
    localStorage.setItem('auth-access', res.body?.data?.tokens?.access);
    localStorage.setItem('auth-refresh', res.body?.data?.tokens?.refresh);
  };
  return (
    <ButtonFormBody formComponent={Login} text={'Login'} onSuccess={handler} />
  );
};

export const SignupForm = (props) => {
  const [, setUser] = useContext(UserContext);
  const handler = async (values) => {
    const res = await API.signup(values);
    setUser(res.body?.data?.user);
    localStorage.setItem('auth-access', res.body?.data?.tokens?.access);
    localStorage.setItem('auth-refresh', res.body?.data?.tokens?.refresh);
  };
  return (
    <ButtonFormBody
      formComponent={Signup}
      text={'Signup'}
      onSuccess={handler}
    />
  );
};
