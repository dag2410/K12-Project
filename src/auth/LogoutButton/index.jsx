import { useNavigate } from "react-router-dom";
import logOut from "../authService";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const success = logOut();
    if (success) {
      navigate("/");
    }
  };
  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Đăng xuất
    </button>
  );
};

export default LogoutButton;
