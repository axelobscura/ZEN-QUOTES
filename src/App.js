import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: ''
    }
  }
  componentDidMount(){
    axios.get("https://api.github.com/zen").then(response => {
      console.log(response);
      this.setState({ quote: response.data });
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            ZEN DEVELOPER QUOTES
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.quote}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
