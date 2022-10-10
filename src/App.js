import React from 'react'
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom'
import Home from "./components/Home";

import './index.css'
import './app.styles.scss'
import Landing from './pages/Landing'

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Router>
          <Route exact path='/' component={Landing} />
          <Route exact path="/channels">
            <Home />
          </Route>
          <Route exact path="/channels/:id">
            <Home />
          </Route>
        </Router>
      </HashRouter>
    )
  }
}