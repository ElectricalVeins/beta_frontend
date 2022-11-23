import {useEffect, useState} from "react";
import {Layout, PageHeader} from "antd";
import 'antd/dist/antd.css';
import styles from "../src/styles";
import {Header} from "../src/components/Header";
import {UserContext} from "../src/ctx/user";
import API from "../src/api/requests";

export default function AppWrapper({Component, pageProps}) {
    const userCtx = useState(null);
    useEffect(() => {
        const loadUser = async function () {
            const token = localStorage.getItem('auth-access')
            if (token) {
                const res = await API.getCurrentUser(token);
                userCtx[1](res.data);
            }
        }
        loadUser();
    }, []);
    return <UserContext.Provider value={userCtx}>
        <Layout style={styles.pageLayout}>
            <PageHeader style={styles.header}>
                <Header/>
            </PageHeader>
            <Component {...pageProps}/>
        </Layout>
    </UserContext.Provider>
}