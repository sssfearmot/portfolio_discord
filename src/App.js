import React from 'react'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'

import './index.css'
import './app.styles.scss'
import Landing from './pages/Landing'

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route exact path='/' component={Landing} />
      </HashRouter>
    )
  }
}