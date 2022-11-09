import { useContext } from 'react';
import { Space, Typography } from 'antd';
import { UserContext } from '../ctx/user';
import { LoginForm, SignupForm } from './forms/AuthForms';
import { LogoutButton } from './LogoutButton';
import { Greeting } from "./Greeting";
import { AccountEdit } from "./forms/AccountEdit";
import styles from '../styles';

const buttonStrategy = {
  false: [LoginForm, SignupForm],
  true: [Greeting, AccountEdit, LogoutButton],
};

export const Header = () => {
  const [user] = useContext(UserContext);
  return (
    <div style={styles.spaceBetween}>
      <Typography style={styles.logoText}>beta</Typography>
      <Space>
        {buttonStrategy[Boolean(user).toString()].map((Component, i) => (
          <Component key={i} user={user} />
        ))}
      </Space>
    </div>
  );
};
