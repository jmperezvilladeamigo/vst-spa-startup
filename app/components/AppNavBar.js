import React from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class AppNavBar extends React.Component {

  aboutClick() {
  	this.props.history.push('/about');
  }

  render() {
  	const navbarInstance = (
	  <Navbar>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="#">Vst-spa</a>
	      </Navbar.Brand>
	    </Navbar.Header>
	    <Nav>
	      <NavItem eventKey={1} href="#">Archivo</NavItem>
	      <NavItem eventKey={2} href="#" disabled>Editar</NavItem>
	    </Nav>
	    <Nav pullRight>
	      <NavDropdown eventKey={3} title="Acciones" id="basic-nav-dropdown">
	        <MenuItem eventKey={3.1}>Acceder</MenuItem>
	        <MenuItem eventKey={3.2}>Perfil</MenuItem>
	        <MenuItem divider />
            <MenuItem eventKey={3.3} onClick={this.aboutClick.bind(this)}>Acerca de</MenuItem>
	      </NavDropdown>
	    </Nav>
	  </Navbar>
	);

    return navbarInstance;
  }

}
