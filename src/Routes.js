import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyBaby from 'Pages/MyBaby/MyBaby'
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/mybaby']} component={MyBaby} />
      </Switch>
    </Router>
  )
}
