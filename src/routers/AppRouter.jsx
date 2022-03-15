import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import AccountPage from './pages/AccountPage'
import UsersPage from './pages/admin/UsersPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectPage from './pages/ProjectPage'
import ProjectsPage from './pages/ProjectsPage'
import RegisterPage from './pages/RegisterPage'

export default function AppRouter() {
  return (
    <div>
        <Router>
          <Layout>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/register' component={RegisterPage} />
              <Route exact path='/account' component={AccountPage} />
              <Route exact path='/Projects' component={ProjectsPage} />
              <Route exact path='/project/:projectId' component={ProjectPage} />
              <Route exact path='/admin/user' component={UsersPage} />

              <Route exact path='*' component={NotFoundPage} />
            </Switch>
          </Layout>
        </Router>
    </div>
  )
}
