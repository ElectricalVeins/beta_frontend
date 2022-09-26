import { useContext } from 'react';
import { Space } from 'antd';
import { UserContext } from '../ctx/user';
import { LoginForm, SignupForm } from './forms/Forms';
import { LogoutButton } from './LogoutButton';

const buttonStrategy = {
  false: [LoginForm, SignupForm],
  true: [LogoutButton],
};

export const Header = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <Space>
        {buttonStrategy[Boolean(user).toString()].map((Component, i) => (
          <Component key={i} />
        ))}
      </Space>
    </div>
  );
};
