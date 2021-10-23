import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/Login'
import HomeRoute from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/ebank/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={HomeRoute} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </div>
)

export default App
