import { InputText } from "@/components/InputText";
import config from "@/config";
import useQuery from "@/hooks/useQuery";
import { loginSchema } from "@/schema";
import authService from "@/service/authService";
import httpRequest from "@/utils/httpRequest";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const query = useQuery();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onLogin = async ({ email, password }) => {
    try {
      const res = await authService.postLogIn(email, password);
      console.log(res);
      httpRequest.setToken(res.access_token);
      navigate(query.get("continue") || config.routes.home);
    } catch (error) {
      if (error.response && error.response.status === "error") {
        setError("root", { message: "Đã xảy ra lỗi, vui lòng thử lại sau" });
      } else {
        setError("root", { message: "Email hoặc mật khẩu không đúng" });
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-3 w-25 shadow-lg">
        <h2 className="text-center">Đăng Nhập</h2>
        {errors.root && <p className="text-danger text-center">{errors.root.message}</p>}
        <form onSubmit={handleSubmit(onLogin)}>
          <div className="mb-3">
            <InputText placeholder="Nhập email" name="email" register={register} message={errors.email?.message} />
          </div>
          <div className="mb-3">
            <InputText type="password" placeholder="Nhập mật khẩu" name="password" register={register} message={errors.password?.message} />
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
