import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      bio: '',
      company: '',
      name: ''
    }
  }
  async componentDidMount(){
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    let data = response.data;
    this.setState(
      {
        imgUrl: data.avatar_url,
        bio: data.bio,
        company: data.company,
        name: data.name
      }
    )
  }
  render() { 
    return (
      <div>
        <img src={this.state.imgUrl} alt={this.state.name}/>
        <h1>{this.state.name}</h1>
        <p>{this.state.bio}<br/>{this.state.company}</p>
      </div>
    );
  }
}
 
export default GithubUserInfo;