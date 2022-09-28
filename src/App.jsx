import { Layout, PageHeader } from 'antd';
import { Header } from './components/Header';
import { UserContext } from './ctx/user';
import { Main } from './page/Main';
import styles from './styles';

function App() {
  return (
    <UserContext.Provider value={null}>
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
