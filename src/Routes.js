import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyBaby from 'Pages/MyBaby/MyBaby'
import FindMyBaby from 'Pages/FindMyBaby/FindMyBaby'
import Login from 'Pages/Login/Login'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/mybaby']} component={MyBaby} />
        <Route exact path={'/findmybaby'} component={FindMyBaby} />
        <Route exact path={'/login'} component={Login} />
      </Switch>
    </Router>
  )
}
