import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../Auth/useAuth';
import routes from '../helpers/routes'

export default function Navigation() {
    const { logout } = useAuth();
    return (
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
            <Navbar.Brand as={NavLink} to='/'>
                Task Control
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link as={NavLink} to={routes.projects}>
                        Proyectos
                    </Nav.Link>
                    <NavDropdown title='Admin'>
                        <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.login}>Iniciar de Sesión</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register}>Registrarse</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account}>Cuenta</Nav.Link>
                    <Nav.Link onClick={logout}>Cerrar Sesión</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
