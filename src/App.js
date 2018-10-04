// import React, { Component } from 'react';
// import './css/App.css';
import Menu  from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Divider from './components/Divider'
import HackDivider from './components/HackDivider';
import {BrowserRouter as Router,Route} from 'react-router-dom';

// const HomePage = () => (
//   <div>
  // <Header/>
  // <About/>
  // <Divider/>
  // <Projects/>
  // <HackDivider/>
//   </div>
// )

// class App extends Component {

//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Menu/>
//           <Route exact path="/" component={HomePage}/>
//           <Route path="/about" component={About}/>
//           <Route path="/projects" component={Projects}/>
//           <Footer/>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
// src/App.js

import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
// import './App.css';

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
        <Navbar fluid>
          <Navbar.Header>
          
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
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
                  <Header/>
                  <About/>
                  <Divider/>
                  <Projects/>
                  <HackDivider/>
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
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;