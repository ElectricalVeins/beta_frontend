import { Layout, PageHeader } from 'antd';
import {useEffect, useState} from 'react';
import { Header } from './components/Header';
import { UserContext } from './ctx/user';
import { Main } from './page/Main';
import styles from './styles';
import API from "./api/requests";

function App() {
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
    },[]);
  return (
    <UserContext.Provider value={userCtx}>
      <Layout style={styles.pageLayout}>
        <PageHeader style={styles.header}>
          <Header />
        </PageHeader>
        <Main />
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
