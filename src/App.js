import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/styles.scss'

import Login from './pages/Login'
import Layout from './pages/Layout'
import Home from './pages/Home'
import TopLine from './pages/TopLine'
import BottomLine from './pages/BottomLine'

const App = () => {
  return (
    <BrowserRouter basename="data-analytics">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Layout>
          <Route exact path="/home" component={Home} />
          <Route exact path="/top-line" component={TopLine} />
          <Route exact path="/bottom-line" component={BottomLine} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App
