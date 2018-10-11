import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Menu from './components/Menu';
import Footer from './components/Footer';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
      <Menu {...this.props}/>
      {/* <Footer/> */}
      </div>
    );
  }
}

export default App;