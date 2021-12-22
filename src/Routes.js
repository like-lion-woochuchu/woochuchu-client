import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyBaby from 'Pages/MyBaby/MyBaby'
import FindMyBaby from 'Pages/FindMyBaby/FindMyBaby'
import Login from 'Pages/Login/Login'
import SignUp from 'Pages/SignUp/SignUp'
import MessageList from 'Pages/Message/MessageList'
import MessageDetailPage from 'Pages/Message/MessageDetail'
import MessagePage from 'Pages/Message/Message'
import MyBabyWrite from 'Pages/MyBaby/MyBabyWrite'
import FindMyBabyWrite from 'Pages/FindMyBaby/FindMyBabyWrite'
import FindMyBabyDetail from 'Pages/FindMyBaby/FindMyBabyDetail'
import ScrollToTop from 'Components/Common/ScrollToTop'
export default function Routes() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path={['/', '/mybaby']} component={MyBaby} />
        <Route exact path={'/mybaby_write'} component={MyBabyWrite} />
        <Route exact path={'/findmybaby'} component={FindMyBaby} />
        <Route exact path={'/findmybaby/:seq'} component={FindMyBabyDetail} />
        <Route exact path={'/findmybaby_write'} component={FindMyBabyWrite} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/signup'} component={SignUp} />
        <Route exact path={'/message-list'} component={MessageList} />
        <Route exact path={'/message-detail'} component={MessageDetailPage} />
        <Route exact path={'/message'} component={MessagePage} />
      </Switch>
    </Router>
  )
}
