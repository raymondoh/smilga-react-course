import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
   
  };

  const renderUsers =
    users &&
    users.map(user => {
      console.log(user.login);
      return (
        <div key={user.id}>
          <h1>{user.login}</h1>
          <div>
            <img src={user.avatar_url} alt={user.login} />
          </div>
        </div>
      );
    });
  return (
    <div>
      <h2>The list</h2>
      {renderUsers}
    </div>
  );
};
export default FetchData;
