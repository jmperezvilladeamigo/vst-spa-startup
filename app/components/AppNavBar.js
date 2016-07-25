import React from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, Dropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import auth from '../stores/AuthStore';

export default class AppNavBar extends React.Component {

  aboutClick() {
  	this.props.history.push('/about');
  }

  render() {
    const authState = auth.getState();

  	const navbarInstance = (
	  <Navbar>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="#">Vst-spa</a>
	      </Navbar.Brand>
	    </Navbar.Header>
	    <Nav>
	      <LinkContainer to={{ pathname: '/about' }}>
	        <NavItem>Acerca de</NavItem>
	      </LinkContainer>
	      <NavItem disabled>Editar</NavItem>
	    </Nav>
	    <Nav pullRight>
	       {!authState.loggedIn ? (
	       	  <NavDropdown title="josemaria.perez">
		        <LinkContainer to={{ pathname: '/logout' }}>
                  <MenuItem>Salir</MenuItem>
	            </LinkContainer>
              </NavDropdown>
            ) : (
		      <LinkContainer to={{ pathname: '/login' }}>
		        <NavItem>Acceder</NavItem>
	          </LinkContainer>
            )}
	    </Nav>
	  </Navbar>
	);

    return navbarInstance;
  }

}
