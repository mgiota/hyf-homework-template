//https://rapidapi.com/blog/react-context-api/
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { UserList } from './UserList';

import { Provider } from '../context';

function App() {
  return (
    <Provider>
      <div className="App">
        <h1>Github User Searcher</h1> 
        <SearchBar />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
