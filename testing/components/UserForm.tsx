import { useState } from "react";

export default function UserForm({ onUserAdd }: any) {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  function handleSubmit(e: any) {
    e.preventDefault();
    onUserAdd({ name, email });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
        ></input>
      </div>
      <div>
        <label htmlFor="email">Enter Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        ></input>
      </div>
      <button>Add User</button>
    </form>
  );
}
