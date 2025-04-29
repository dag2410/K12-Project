import { InputText } from "@/components/InputText";
import Loading from "@/components/Loading";
import useDebounce from "@/hooks/useDebounce";
import useLoading from "@/hooks/useLoading";
import { registerSchema } from "@/schema";
import authService from "@/service/authService";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onRegister = async (data) => {
    startLoading();
    try {
      const response = await authService.postRegister(data);
      if (response.status === "success") {
        navigate("/");
      } else {
        setError("email", {
          type: "manual",
          message: response.message || "Đăng kí thất bại",
        });
      }
    } catch (error) {
      setError("email", {
        type: "manual",
        message: "Đăng kí thất bại  ",
      });
    } finally {
      stopLoading();
    }
  };

  const emailValue = watch("email");
  const debounceValue = useDebounce(emailValue, 800);

  useEffect(() => {
    if (!emailValue) return;
    const validateEmail = async () => {
      const isValid = await trigger("email");
      console.log(isValid);
      if (isValid) {
        const exists = await authService.checkEmail(debounceValue);

        if (exists) {
          setError("email", {
            type: "manual",
            message: "Email này đã tồn tại",
          });
        }
      } else {
        clearErrors("email");
      }
    };
    validateEmail();
  }, [emailValue, trigger, setError, debounceValue]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        <div className="card p-3 w-25 shadow-lg">
          <h2 className="text-center">Đăng kí</h2>
          <form onSubmit={handleSubmit(onRegister)}>
            <div className="mb-3">
              <InputText
                placeholder="Nhập tên để đăng kí"
                name="firstName"
                register={register}
                message={errors.firstName?.message}
              />
            </div>
            <div className="mb-3">
              <InputText
                placeholder="Nhập họ để đăng kí"
                name="lastName"
                register={register}
                message={errors.lastName?.message}
              />
            </div>
            <div className="mb-3">
              <InputText
                placeholder="Nhập email để đăng kí"
                name="email"
                register={register}
                message={errors.email?.message}
              />
            </div>
            <div className="mb-3">
              <InputText
                placeholder="Nhập mật khẩu"
                name="password"
                register={register}
                message={errors.password?.message}
              />
            </div>
            <div className="mb-3">
              <InputText
                placeholder="Nhập lại mật khẩu"
                name="password_confirmation"
                register={register}
                message={errors.password_confirmation?.message}
              />
            </div>
            <button className="btn btn-danger w-100">Đăng kí</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
