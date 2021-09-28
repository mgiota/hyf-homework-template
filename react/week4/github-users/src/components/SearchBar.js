//https://stackoverflow.com/questions/64786653/current-user-with-react-context
import { useContext, useState } from 'react';
import { Context } from '../context';

export function SearchBar() {
  const [username, setUsername] = useState('');
  const { dispatch } = useContext(Context);

  const onChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    dispatch(value);
  }
 
  return (
    <form>
      <input type="text" value={username} onChange={onChange} />
    </form>
  )

}