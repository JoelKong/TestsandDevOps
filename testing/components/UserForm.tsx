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
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div>
        <label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
      </div>
      <button>Add User</button>
    </form>
  );
}
