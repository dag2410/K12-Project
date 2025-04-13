import Button from "@/components/Button";
import EditProfile from "@/components/EditProfile";
import useUser from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setIsEditing(false);
    }
  }, [user]);

  const getDisplayValue = (value) => {
    if (!value) return "Chưa cập nhật";
    if (value instanceof Date || !isNaN(Date.parse(value))) {
      return new Date(value).toLocaleDateString();
    }
    return value;
  };

  if (!user) {
    return (
      <div className="alert alert-warning">Không thể tìm thấy người dùng</div>
    );
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center gap-3 mt-3 mb-3">
        <Link to="/users">Tài Khoản</Link>
        <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
        <div>Thông tin cá nhân</div>
      </div>
      <h1>Thông tin cá nhân</h1>
      {!isEditing ? (
        <div className="card p-4">
          <div className="avatar-section mb-4 text-center">
            <h4>Ảnh đại diện</h4>
            <div className="mb-2">
              <img
                src={user.image}
                alt="Avatar"
                width={150}
                height={150}
                className="rounded-circle"
                style={{ objectFit: "cover", border: "2px solid #ddd" }}
              />
            </div>
          </div>
          <p>
            <span className="fw-bold">First Name:</span>{" "}
            {getDisplayValue(user.firstName)}
          </p>
          <p>
            <span className="fw-bold">Last Name:</span>{" "}
            {getDisplayValue(user.lastName)}
          </p>
          <p>
            <span className="fw-bold">Age:</span> {getDisplayValue(user.age)}
          </p>
          <p>
            <span className="fw-bold">Gender:</span>{" "}
            {getDisplayValue(user.gender)}
          </p>
          <p>
            <span className="fw-bold">Email:</span>{" "}
            {getDisplayValue(user.email)}
          </p>
          <p>
            <span className="fw-bold">Phone:</span>{" "}
            {getDisplayValue(user.phone)}
          </p>
          <p>
            <span className="fw-bold">Username:</span>{" "}
            {getDisplayValue(user.username)}
          </p>
          <p>
            <span className="fw-bold">Birth Date:</span>{" "}
            {getDisplayValue(user.birthDate)}
          </p>
          <p>
            <span className="fw-bold">Email Verified At:</span>{" "}
            {user.emailVerifiedAt
              ? "Tài khoản đã được xác minh"
              : "Tài khoản chưa xác minh"}
          </p>
          <p>
            <span className="fw-bold">Created At:</span>{" "}
            {new Date(user.createdAt).toLocaleString()}
          </p>
          <Button primary size="medium" onClick={() => setIsEditing(true)}>
            Sửa thông tin
          </Button>
        </div>
      ) : (
        <EditProfile user={user} onCancel={() => setIsEditing(false)} />
      )}
    </div>
  );
};

export default Profile;
