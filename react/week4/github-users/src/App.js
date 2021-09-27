import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch(`{"message":"API rate limit exceeded for 95.91.253.143. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)","documentation_url":"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"}
    // `)
    // // fetch(`https://api.github.com/search/users?q=${username}`)
    //   .then(res => res.json())
    //   .then();
    axios.get(`https://api.github.com/search/users?q=${username}`, {
      auth: {
        username: '73f8a8e1563a4a2f9fc5',
        password: '3b91407a3a7df82d567b235501432e978c8c72bd'
      }
    })
    .then(users => {
      console.log(users, '!!users')
      setUsers(users.data.items)
    })
  })

  return (
    <div className="App">
      <h1>Github User Searcher</h1> 
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      { users && users.map(user => <div key={user.login}>{user.login}</div>)}
    </div>
  );
}

export default App;
