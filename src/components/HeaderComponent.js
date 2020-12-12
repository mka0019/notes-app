import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        /* we need to bind the event handler
        this ensures that when the toggle nav is called
        then the this keyword inside it referes correctly to the component
        this.toogleNav = this.toogleNav.bind(this);
        */     
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal(); //close the modal ater submission
        event.preventDefault();
    }

    render() {
        // if (window.location.pathname === '/sign-in'){
        //     return null;
        // }
        return (
            <React.Fragment>
                <Navbar light className="bg-white" sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/home">ToDoApp</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}  />
                        <Collapse isOpen={this.state.isNavOpen} navbar  className="justify-content-end">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/sign-in">
                                        <span className="fa fa-sign-in fa-lg" /> Sign In
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/sign-up">
                                        <span className="fa fa-user-plus fa-lg" /> Sign Up
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
