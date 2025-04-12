import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();

  const handleRegister = async () => {
    navigate("/register");
  };

  return (
    <button primary onClick={handleRegister} className="btn btn-danger">
      Đăng Kí
    </button>
  );
};

export default RegisterButton;
