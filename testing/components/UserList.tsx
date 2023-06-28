export default function UserList({ users }: any): JSX.Element {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        {users.map((user: any): any => {
          return (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
