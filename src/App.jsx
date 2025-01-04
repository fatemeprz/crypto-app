import Layout from "./components/Layout/Layout";
import HomePage from "./components/templates/HomePage";
import CoinProvider from "./Context/CoinProvider";

function App() {
  return (
    <>
      <Layout>
        <CoinProvider>
          <HomePage />
        </CoinProvider>
      </Layout>
    </>
  );
}

export default App;
