import Loading from "@/components/Loading";
import config from "@/config";
import { useGetProfilesAllQuery } from "@/features/profile/profileSlice";
import { Link } from "react-router-dom";

function Users() {
  const { data: users = [], isLoading, error } = useGetProfilesAllQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Đã xảy ra lỗi khi tải danh sách người dùng</p>;
  }

  return (
    <div>
      <h1>Users page</h1>
      <ul>
        {users.data.map((user) => (
          <li key={user.id}>
            <Link to={`${config.routes.users}/${user.username}`}>
              {user.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
