import React from 'react'
import { render } from 'react-dom'
import 'regenerator-runtime/runtime'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Auth from './pages/auth'
import Setup from './pages/setup'

import { checkConfigExists } from './utils/file-system'

import './styles/global.css'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const userConfigExists = checkConfigExists()

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return userConfigExists ? (
              <Redirect to="/auth" />
            ) : (
              <Redirect to="/initial-setup" />
            )
          }}
        />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/initial-setup" component={Setup} />
      </Switch>
    </HashRouter>
  )
}

render(<App />, mainElement)
