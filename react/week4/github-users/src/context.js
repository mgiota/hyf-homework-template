import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

// whatever state we put into this Provider 
// provider is going to wrap every other component
export class Provider extends Component {
  state = {
    users: [],
    dispatch: (value) => {
      // without auth I can make 10 requests
  // https://github.com/settings/applications/new
  // https://create-react-app.dev/docs/adding-custom-environment-variables/
      axios.get(`https://api.github.com/search/users?q=${value}`, {
        auth: {
          username: process.env.REACT_APP_CLIENT_ID,
          password: process.env.REACT_APP_CLIENT_SECRET
        }}
      ).then(users => {
        this.setState({users: users.data.items})
      })
      .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

