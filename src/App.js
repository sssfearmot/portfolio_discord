import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './index.css'
import './app.styles.scss'
import Landing from './pages/Landing'
export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    )
  }
}