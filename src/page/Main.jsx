import { Typography, Divider } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../ctx/user';
import styles from '../styles';

export const Main = (props) => {
  const user = useContext(UserContext);

  return (
    <div>
      <Divider style={styles.divider} />
      <Typography style={styles.centerText}>
        {user ? 'Content' : 'Please, login to your account'}
      </Typography>
    </div>
  );
};
