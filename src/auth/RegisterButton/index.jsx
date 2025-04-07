import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();

  const handleRegister = async () => {
    navigate("/register");
  };
  
  return (
    <Button primary onClick={handleRegister}>
      Đăng kí
    </Button>
  );
};

export default RegisterButton;
