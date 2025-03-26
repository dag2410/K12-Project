import { useNavigate } from "react-router-dom";
import LoginPage from "../LoginPage";

const LoginButton = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    const success = LoginPage();
    if (success) {
      navigate("/");
    }
  };
  return (
    <button onClick={handleLogin} className="btn btn-danger">
      Đăng Nhập
    </button>
  );
};

export default LoginButton;
