import React, { Component } from 'react';
// import Menu from '../components/Menu';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Projects from './components/Projects';
// import About from './components/About';
// import Divider from './components/Divider';
// import HackDivider from './components/HackDivider';


class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <h4>
                You are logged in!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;