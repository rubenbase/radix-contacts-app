import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import fs from 'fs'
import Auth from './pages/auth'
import Setup from './pages/setup'

import { checkFileExists } from './utils/file-system'

import './styles/global.css'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

console.log('Hii3', checkFileExists)
const userFirstTime = checkFileExists()

const App = () => {
  console.log('Hii', userFirstTime, { fs })

  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return false ? <Redirect to="/auth" /> : <Redirect to="/initial-setup" />
          }}
        />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/initial-setup" component={Setup} />
      </Switch>
    </HashRouter>
  )
}

render(<App />, mainElement)
