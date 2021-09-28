//https://stackoverflow.com/questions/64786653/current-user-with-react-context
import { useState } from 'react';

export function SearchBar(props) {
  const [username, setUsername] = useState('');


  const onChange = (e) => {
    setUsername(e.target.value);
    props.onChange(e.target.value)
  }
  return (
    <form>
      <input type="text" value={username} onChange={onChange} />
    </form>
  );
}