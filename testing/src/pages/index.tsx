import UserForm from "../../components/UserForm";
import UserList from "../../components/UserList";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [users, setUsers] = useState<any>([]);

  function onUserAdd(user: any) {
    setUsers([...users, user]);
  }

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </>
  );
}
