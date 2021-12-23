import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyBaby from 'Pages/MyBaby/MyBaby'
import Login from 'Pages/Login/Login'
import SignUp from 'Pages/SignUp/SignUp'
import FamilyWrite from 'Pages/Family/FamilyWrite'
import Family from 'Pages/Family/Family'
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/mybaby']} component={MyBaby} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/signup'} component={SignUp} />
        <Route exact path={'/family_write'} component={FamilyWrite} />
        <Route exact path={'/family'} component={Family} />
      </Switch>
    </Router>
  )
}
