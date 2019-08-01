import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import GithubUserInfo from './GithubUserInfo';

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
  componentDidUpdate(){
    console.log("INSIDE COMPONENT DID UPDATE");
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        <GithubUserInfo username="facebook" />
        <GithubUserInfo username="axelobscura" />
        <GithubUserInfo username="colt" />
        <GithubUserInfo username="gaearon" />
        <GithubUserInfo username="sophiebits" />
      </div>
    );
  }
}

export default App;
