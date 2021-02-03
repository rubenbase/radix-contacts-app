import React from 'react'
import { render } from 'react-dom'
import 'regenerator-runtime/runtime'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Auth from './pages/auth'
import Setup from './pages/setup'
import Contacts from './pages/contacts'

import { checkConfigExists } from './utils/user-config'

import './styles/global.css'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const userConfigExists = checkConfigExists()

const App = () => {
  return (
    <BrowserRouter>
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
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </BrowserRouter>
  )
}

render(<App />, mainElement)
