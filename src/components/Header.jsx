import { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import { UserContext } from '../ctx/user';
import { LoginForm } from './forms/Login';

export const Header = () => {
  const user = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };
  const onCancel = () => setOpen(false);
  const formSubmit = (form) => () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onCreate(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };
  return (
    <div>
      <Button onClick={openModal}>{user ? 'Logout' : 'Login'}</Button>
      <Modal
        open={open}
        title="Login"
        okText="Login"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={formSubmit}
      >
        <LoginForm onCreate={onCreate} />
      </Modal>
    </div>
  );
};
