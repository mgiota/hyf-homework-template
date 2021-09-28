//https://javascript.plainenglish.io/how-to-use-react-context-api-with-functional-component-472f1d5e0851
import React, { useReducer } from "react";
import axios from "axios";
import { Context } from './context';

const UsersState = (props) => {
  let initialState = {
    users: []
  }
  const [state, dispatch] = useReducer((state, action) => {
    return {
      ...state,
      users: action.payload
    }
  }, initialState);

  const searchUsers = (value) => {
    axios.get(`https://api.github.com/search/users?q=${value}`, {
        auth: {
          username: process.env.REACT_APP_CLIENT_ID,
          password: process.env.REACT_APP_CLIENT_SECRET
        }}
      ).then(users => {
        dispatch({ payload: users.data.items})
      })
      .catch(err => console.log(err))
  }

  return (
    <Context.Provider
      value={{
        users: state.users,
        searchUsers
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default UsersState;
