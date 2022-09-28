import { useContext } from 'react';
import { Button } from 'antd';
import { UserContext } from '../ctx/user';

export const LogoutButton = (props) => {
  const [user, setUser] = useContext(UserContext);
  const onLogout = () => {
    if (user) {
      setUser(null);
    }
    localStorage.clear();
  };
  return <Button onClick={onLogout}>Logout</Button>;
};
