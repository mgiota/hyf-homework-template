import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const cachedResponses = {}
   

  const allUsers = {
    data: {
      items: [
        { login: 'mgiota' },
        { login: 'mlitsa' },
        { login: 'msonia' },
        { login: 'vagelis' },
        { login: 'lalamglala'}
      ]
    }
  }

  const findUsers = (term) => {
    const filteredUsers = allUsers.data.items.filter(user => user.login.includes(term));
    setUsers(filteredUsers);
  }

  // without auth I can make 10 requests
  // https://github.com/settings/applications/new
  // https://create-react-app.dev/docs/adding-custom-environment-variables/
  const getUsers = (user) => {
    console.log("users", user);
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

  const onSubmit = (e) => {
    e.preventDefault();
    findUsers(e.target.value);
  }

  const onChange = (e) => {
    setUsername(e.target.value);
    getUsers(e.target.value)
  }

  return (
    <div className="App">
      <h1>Github User Searcher</h1> 
      <form onSubmit={onSubmit}>
        <input type="text" value={username} onChange={onChange} />
      </form>
      { users && users.map(user => <div key={user.login}>{user.login}</div>)}
    </div>
  );
}

export default App;
