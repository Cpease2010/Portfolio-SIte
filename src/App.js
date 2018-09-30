import React, { Component } from 'react';
import './css/App.css';
import { Button } from 'reactstrap';
import Header from './components/Header';
import Menu  from './components/Menu';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Header/>
        <Home/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
