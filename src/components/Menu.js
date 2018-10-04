import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Cory Pease</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                        <Link to="/">Home</Link>
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
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}