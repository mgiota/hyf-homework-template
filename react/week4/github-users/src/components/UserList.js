import React from 'react';
export function UserList(props) {
  const { users } = props;
  return (
    <ul>
      { users && 
        users.map(user => <li key={user.login}>{user.login}</li>) 
      }
    </ul>
  )
}