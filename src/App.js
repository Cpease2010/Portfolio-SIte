import React, { Component } from 'react';
import './css/App.css';
import { Button } from 'reactstrap';
import Menu  from './components/Menu';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Divider from './components/Divider'
import HackDivider from './components/HackDivider';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Home/>
        <About/>
        <Divider/>
        <Projects/>
        <HackDivider/>
        <Footer/>
      </div>
    );
  }
}

export default App;
