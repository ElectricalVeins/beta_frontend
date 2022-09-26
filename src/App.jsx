import { Layout, Typography, PageHeader, Divider } from 'antd';
import { Header } from './components/Header';
import { UserContext } from './ctx/user';

const headerStyles = { padding: '8px 12px' };
const dividerStyles = { margin: '4px 0' };

function App() {
  return (
    <UserContext.Provider value={null}>
      <Layout>
        <PageHeader style={headerStyles}>
          <Header />
        </PageHeader>
        <Divider style={dividerStyles} />
        <Typography>Content</Typography>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
