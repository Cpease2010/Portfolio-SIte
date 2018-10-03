import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../css/Menu.css';

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
                        <NavLink href="#home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#about">About</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#projects">Projects</NavLink>
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