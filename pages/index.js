import {useContext} from "react";
import {Divider, Typography} from 'antd';
import styles from '../src/styles';
import {UserContext} from "../src/ctx/user";

export default function Home(props) {
    const [user] = useContext(UserContext);
    return (
        <div>
            <Divider style={styles.divider}/>
            <Typography style={styles.centerText}>
                {user ? 'Content' : 'Please, login to your account'}
            </Typography>
        </div>
    );
}
