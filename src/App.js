import React from 'react'
import './shared/scss/main.scss'
import LandingPage from './containers/landing-page'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MyProjects from './containers/my-projects/my-projects'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/my-projects">
            <MyProjects />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
