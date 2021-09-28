import React, { useContext } from 'react';
import { Context } from '../context';

// import { Consumer } from '../context';

export function UserList() {
  const { users } = useContext(Context); 
  return (
    <ul>
     { users && users.map(user => <li key={user.login}>{user.login}</li>) }
    </ul>
  )
}
// export function UserList(props) {
//   // const { users } = props;
//   return (
//     <>
//       <Consumer>
//         { value => {
//           console.log(value);
//           const { users } = value
//           return (
//             <ul>
//               { users && users.map(user => <li key={user.login}>{user.login}</li>) }
//             </ul>
//           )
//         }}
//       </Consumer>
      
//     </>
//   )
// }