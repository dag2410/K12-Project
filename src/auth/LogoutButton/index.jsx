import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import useUser from "@/hooks/useUser";
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
    <Button primary onClick={handleLogout}>
      Đăng xuất
    </Button>
  );
};

export default LogoutButton;
