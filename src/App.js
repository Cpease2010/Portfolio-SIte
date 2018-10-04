import React, { Component } from 'react';
import './css/App.css';
import Menu  from './components/Menu';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Divider from './components/Divider'
import HackDivider from './components/HackDivider';
import {BrowserRouter as Router,Route} from 'react-router-dom';

// auth.login();

const HomePage = () => (
  <div>
  <Home/>
  <About/>
  <Divider/>
  <Projects/>
  <HackDivider/>
  </div>
)

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Menu/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
