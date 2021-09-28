//https://stackoverflow.com/questions/64786653/current-user-with-react-context
import { useState } from 'react';
import { Consumer } from '../context';

export function SearchBar() {
  const [username, setUsername] = useState('');

  const onChange = (value, dispatch) => {
    setUsername(value);
    dispatch(value);
  }
  return (
    <Consumer>
      { value => {
          console.log(value);
          const { dispatch } = value;
          return (
            <form>
              <input type="text" value={username} onChange={(e) => onChange(e.target.value, dispatch)} />
            </form>
          )
      }}
      
    </Consumer>
  );
}