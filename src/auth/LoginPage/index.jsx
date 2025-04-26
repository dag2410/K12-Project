import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

import config from "@/config";
import { loginSchema } from "@/schema";
import useQuery from "@/hooks/useQuery";
import Loading from "@/components/Loading";
import useLoading from "@/hooks/useLoading";
import { setToken } from "@/utils/httpRequest";
// import authService from "@/service/authService";
import { InputText } from "@/components/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCurrentUser } from "@/features/auth/authAsync";

const LoginPage = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const isLoggerIn = useSelector((state) => state.auth.isLoggerIn);

  if (isLoggerIn) {
    return <Navigate to="/" />;
  }

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
    startLoading();
    try {
      const res = await authService.postLogIn(email, password);
      setToken(res.data.access_token);
      navigate(query.get("continue") || config.routes.home);
      toast.success("Đăng nhập thành công");
      dispatch(getCurrentUser());
    } catch (error) {
      if (error.response && error.response.status === "error") {
        toast.error("Đăng nhập thất bại. Vui lòng thử lại.");
        setError("root", { message: "Đã xảy ra lỗi, vui lòng thử lại sau" });
      } else {
        setError("root", { message: "Email hoặc mật khẩu không đúng" });
      }
    } finally {
      stopLoading();
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-3 w-25 shadow-lg">
          <h2 className="text-center">Đăng Nhập</h2>
          {errors.root && (
            <p className="text-danger text-center">{errors.root.message}</p>
          )}
          <form onSubmit={handleSubmit(onLogin)}>
            <div className="mb-3">
              <InputText
                placeholder="Nhập email"
                name="email"
                register={register}
                message={errors.email?.message}
              />
            </div>
            <div className="mb-3">
              <InputText
                type="password"
                placeholder="Nhập mật khẩu"
                name="password"
                register={register}
                message={errors.password?.message}
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger w-100"
              disabled={isLoading}
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
