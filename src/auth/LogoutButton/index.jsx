import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import logOut from "../authService/LogOut";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const success = await logOut();
    if (success) {
      navigate("/");
    }
  };
  return (
    <Button primary onClick={handleLogout} className="btn btn-danger">
      Đăng xuất
    </Button>
  );
};

export default LogoutButton;
