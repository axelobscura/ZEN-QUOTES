import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      isLoaded: false
    }
  }
  componentDidMount(){
    axios.get("https://api.github.com/zen").then(response => {
      console.log(response);

      setTimeout(
        function(){
          this.setState({ quote: response.data, isLoaded: true });
        }.bind(this),
        3000
      );
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
            {this.state.isLoaded ? (
              <div>{this.state.quote}</div>
            ) : (
              <p>Cargando...</p>
            )}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
