import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import AppMainLayout from './AppMainLayout'
import About from './About'
import Home from './Home'

export default class App extends React.Component {
  render() {
  	const router = (
  	  <Router history={hashHistory}>
	    <Route path="/" component={AppMainLayout}>
	      <IndexRoute component={Home} />
	      <Route path="about" component={About}/>
	    </Route>
	  </Router>
	);

    return router;
  }
}
