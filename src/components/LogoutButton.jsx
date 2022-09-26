import { useContext } from 'react';
import { Button } from 'antd';
import { UserContext } from '../ctx/user';

export const LogoutButton = (props) => {
  const user = useContext(UserContext);
  const onLogout = () => {
    if (user) {
      localStorage.clear();
    }
  };
  return <Button onClick={onLogout}>Logout</Button>;
};
