import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) return;
    let fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // setUsers(currentUsers => {
    //   return [...currentUsers, { id: fakeId, name }];
    // });
    setName("");
  };

  const removeUser = id => {
    let newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" value={name} onChange={e => setName(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>users</h4>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <button onClick={() => removeUser(user.id)} className="btn">
              remove user
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
