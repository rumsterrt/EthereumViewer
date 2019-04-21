import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Default } from 'views/pages'

const Routes = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Default {...props} />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
