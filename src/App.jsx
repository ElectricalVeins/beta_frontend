import { Layout, Typography, PageHeader, Divider } from 'antd';
import { Header } from './components/Header';
import { UserContext } from './ctx/user';

const styles = {
  header: { padding: '8px 12px' },
  divider: { margin: '4px 0' },
};

function App() {
  return (
    <UserContext.Provider value={null}>
      <Layout>
        <PageHeader style={styles.header}>
          <Header />
        </PageHeader>
        <Divider style={styles.divider} />
        <Typography>Content</Typography>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
