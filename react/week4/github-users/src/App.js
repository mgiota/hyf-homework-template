import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${username}`)
      .then(res => res.json())
      .then(users => setUsers(users.items));
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
