import { Layout, PageHeader } from 'antd';
import { useState } from 'react';
import { Header } from './components/Header';
import { UserContext } from './ctx/user';
import { Main } from './page/Main';
import styles from './styles';

function App() {
  const userCtx = useState(null); // TODO: decide on the basis of localStorage.get('auth-access')
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
