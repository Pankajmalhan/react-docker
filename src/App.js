import React, { Component } from 'react';
import logo from './logo.svg';
//import Parent from "./components/parent";
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '00'
    }
    this.refData = React.createRef();
  }
  
  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    
    return (
      <div className="App">
      <React.StrictMode>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to docker {Math.random()}</h1>
        </header>
      </React.StrictMode>
      </div>
    );
  }
}

export default App;
