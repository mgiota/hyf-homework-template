import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { UserList } from './UserList';

function App() {
  const [users, setUsers] = useState([]);
  // without auth I can make 10 requests
  // https://github.com/settings/applications/new
  // https://create-react-app.dev/docs/adding-custom-environment-variables/
  const onChange = (user) => {
    axios.get(`https://api.github.com/search/users?q=${user}`,
      {
        auth: {
          username: process.env.REACT_APP_CLIENT_ID,
          password: process.env.REACT_APP_CLIENT_SECRET
        }
      }
    )
    .then(users => {
      setUsers(users.data.items)
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <h1>Github User Searcher</h1> 
      <SearchBar onChange={onChange} />
      <UserList users={users} />
    </div>
  );
}

export default App;
