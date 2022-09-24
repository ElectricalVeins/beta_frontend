import { Header } from "./components/Header";
import { UserContext } from "./ctx/user";

function App() {
  return (
    <UserContext.Provider value={null}>
      <Header />
    </UserContext.Provider>
  );
}

export default App;
