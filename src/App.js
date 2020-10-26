import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/styles.scss'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/navbar" component={Navbar} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
