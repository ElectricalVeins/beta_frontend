import { useContext, useState } from 'react';
import { Button } from 'antd';
import { ModalForm } from './ModalForm';
import { Login } from './Login';
import { Signup } from './Signup';
import { UserContext } from '../../ctx/user';
import API from '../../api/requests';

const ButtonFormBody = (props) => {
  const { text, formComponent, onSuccess } = props;
  const user = useContext(UserContext);

  const modalControls = useState(false);
  const [, setOpen] = modalControls;
  const openModal = () => setOpen(true);

  return (
    <>
      <Button onClick={openModal}>{user ? 'Logout' : text}</Button>
      <ModalForm
        controls={modalControls}
        formComponent={formComponent}
        onSuccess={onSuccess}
      />
    </>
  );
};

export const LoginForm = (props) => {
  return (
    <ButtonFormBody
      formComponent={Login}
      text={'Login'}
      onSuccess={API.signin.bind(API)}
    />
  );
};

export const SignupForm = (props) => {
  return (
    <ButtonFormBody
      formComponent={Signup}
      text={'Signup'}
      onSuccess={API.signup.bind(API)}
    />
  );
};
