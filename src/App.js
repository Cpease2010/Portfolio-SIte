import React, { Component } from 'react';
import './css/App.css';
import { Button } from 'reactstrap';
import Header from './components/Header';
import Menu  from './components/Menu';
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
