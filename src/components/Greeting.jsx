import {Typography} from "antd";
import styles from "../styles";

export const Greeting = ({user}) => {
    return (
        <Typography style={styles.logoText}>
            greetings, {user?.login}
        </Typography>
    );
};