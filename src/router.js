import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Home from './containers/Home/Home'

class router extends Component {
  render () {
    return (
     <Router history={browserHistory}>
       <Route path="/" component={App}>
         <IndexRoute component={Home}/>
       </Route>
     </Router>
   )
  }
}

export default router
