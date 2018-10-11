import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Divider from '../components/Divider';
import HackDivider from '../components/HackDivider';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  logout() {
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() && (
            <div>
              <Header/>
              <About/>
              <Divider/>
              <Projects/>
              <HackDivider/>
              <Footer/>
            </div>
          )
        }
        {
          !isAuthenticated() && (
            <div>
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
            </div>
          )
        }
      </div>
    );
  }
}

export default Home;