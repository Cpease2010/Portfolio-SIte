import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import '../css/Menu.css';
import {Link} from 'react-router-dom'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }
    login() {
        this.props.auth.login();
    }
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    logout() {
        this.props.auth.logout();
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const {isAuthenticated} = this.props.auth;
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Cory Pease</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/home">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/about'>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/projects">Projects</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#contact'>Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            {
                                !isAuthenticated() && (
                                <div>
                                    <Button
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.login.bind(this)}
                                    >
                                    Log In
                                    </Button>
                                </div>
                                )
                            }
                            {
                                isAuthenticated() && (
                                    <Button
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.logout.bind(this)}
                                    >
                                    Log Out
                                    </Button>
                                )
                            }
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}