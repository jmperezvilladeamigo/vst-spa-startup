import React from 'react'
import AppNavBar from './AppNavBar';
import { Jumbotron } from 'react-bootstrap';

export default class About extends React.Component {
  render() {
    return (
	  <Jumbotron>
	    <h1>Acerca de...</h1>
	    <p>Desarrollado por Jose María Perez</p>
	  </Jumbotron>
	);
  }
}
