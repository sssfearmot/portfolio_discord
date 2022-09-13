import React from 'react'
import { HashRouter, Route, BrowserRouter } from 'react-router-dom'

import './index.css'
import './app.styles.scss'
import Landing from './pages/Landing'
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Landing} />
      </BrowserRouter>
    )
  }
}