import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import config from "@/config";
import userService from "@/service/userService";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const users = await userService.getAll();
      setUsers(users);
    })();
  }, []);

  return (
    <div>
      <h1>Users page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${config.routes.users}/${user.username}`}>{user.firstName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
