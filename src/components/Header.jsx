import { useContext } from 'react';
import { Space, Typography } from 'antd';
import { UserContext } from '../ctx/user';
import { LoginForm, SignupForm } from './forms/Forms';
import { LogoutButton } from './LogoutButton';
import styles from '../styles';

const buttonStrategy = {
  false: [LoginForm, SignupForm],
  true: [LogoutButton],
};

export const Header = () => {
  const [user] = useContext(UserContext);
  return (
    <div style={styles.spaceBetween}>
      <Typography style={styles.logoText}>beta</Typography>
      <Space>
        {buttonStrategy[Boolean(user).toString()].map((Component, i) => (
          <Component key={i} />
        ))}
      </Space>
    </div>
  );
};
