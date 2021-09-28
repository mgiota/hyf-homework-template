export function User(props) {
  const { user } = props;
  return (
    <li key={user.login}>{user.login}</li>
  );
}