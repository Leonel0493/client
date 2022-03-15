import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
        <Navbar.Brand as={NavLink} to='/'>
            Task Control
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
                <Nav.Link as={NavLink} to='/projects'>
                    Proyectos
                </Nav.Link>
                <NavDropdown title='Admin'>
                    <NavDropdown.Item as={NavLink} to='/admin/user'>Usuarios</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link as={NavLink} to='/login'>Iniciar de Sesión</Nav.Link>
                <Nav.Link as={NavLink} to='/register'>Registrarse</Nav.Link>
                <Nav.Link as={NavLink} to='/account'>Cuenta</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
