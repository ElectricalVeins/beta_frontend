import { useContext, useState } from 'react';
import { Button } from 'antd';
import { ModalForm } from './ModalForm';
import { Login } from './Login';
import { Signup } from './Signup';
import { UserContext } from '../../ctx/user';

const ButtonFormBody = (props) => {
  const { text, formComponent } = props;
  const user = useContext(UserContext);

  const modalControls = useState(false);
  const [, setOpen] = modalControls;
  const openModal = () => setOpen(true);

  return (
    <>
      <Button onClick={openModal}>{user ? 'Logout' : text}</Button>
      <ModalForm controls={modalControls} formComponent={formComponent} />
    </>
  );
};

export const LoginForm = (props) => {
  return <ButtonFormBody formComponent={Login} text={'Login'} />;
};

export const SignupForm = (props) => {
  return <ButtonFormBody formComponent={Signup} text={'Signup'} />;
};
