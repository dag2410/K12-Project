import { useNavigate } from "react-router-dom";
import logOut from "../authService";
import { setToken } from "@/utils/httpRequest";
import Button from "@/components/Button";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const success = await logOut(setToken);
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
