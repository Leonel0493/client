import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import Layout from './components/layouts/Layout'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
