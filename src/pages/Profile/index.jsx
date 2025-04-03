import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import authService, { getCurrentUser } from "@/service/authService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editSchema } from "@/schema";
import { InputText } from "@/components/InputText";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setErrorState] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    setError,
    clearErrors,
    reset,
  } = useForm({
    resolver: yupResolver(editSchema),
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        setErrorState(null);

        const token = localStorage.getItem("token");
        if (!token) {
          setErrorState("Hiện tại bạn đang ở chế độ khách. Vui lòng đăng nhập lại.");
          navigate("/login");
          return;
        }

        const response = await getCurrentUser();
        console.log(response.user);
        if (!response || response.status !== "success" || !response.user) {
          throw new Error("Không tìm thấy người dùng hoặc lỗi từ API.");
        }
        setUser(response.user);
        reset(response.user);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", err);
        setErrorState(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [username, reset]);

  const emailValue = watch("email");
  const phoneValue = watch("phone");
  const usernameValue = watch("username");
  const userId = user?.id;

  useEffect(() => {
    if (!emailValue) return;

    const timerId = setTimeout(async () => {
      const isValid = await trigger("email");
      if (isValid) {
        const exists = await authService.checkEmail(emailValue, userId);
        if (exists) {
          setError("email", {
            type: "manual",
            message: "Email này đã tồn tại",
          });
        } else {
          clearErrors("email");
        }
      }
    }, 800);

    return () => clearTimeout(timerId);
  }, [emailValue, trigger, setError, clearErrors]);

  useEffect(() => {
    if (!phoneValue) return;

    const timerId = setTimeout(async () => {
      const isValid = await trigger("phone");
      if (isValid) {
        const exists = await authService.checkPhone(phoneValue, userId);
        if (exists) {
          setError("phone", {
            type: "manual",
            message: "Số điện thoại này đã tồn tại",
          });
        } else {
          clearErrors("phone");
        }
      }
    }, 800);

    return () => clearTimeout(timerId);
  }, [phoneValue, trigger, setError, clearErrors]);

  useEffect(() => {
    if (!usernameValue) return;

    const timerId = setTimeout(async () => {
      const isValid = await trigger("username");
      if (isValid) {
        const exists = await authService.checkUserName(usernameValue, userId);
        if (exists) {
          setError("username", {
            type: "manual",
            message: "Username này đã tồn tại",
          });
        } else {
          clearErrors("username");
        }
      }
    }, 800);

    return () => clearTimeout(timerId);
  }, [usernameValue, trigger, setError, clearErrors]);

  const getDisplayValue = (value) => (value ? value : "Chưa cập nhật");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!user) {
    return <div className="alert alert-warning">Không tìm thấy thông tin người dùng.</div>;
  }

  const onSubmit = async (data) => {
    if (data.birthDate) {
      data.birthDate = new Date(data.birthDate).toISOString().split("T")[0];
    }
    const payload = {};

    for (const key in data) {
      if (data[key]) {
        payload[key] = data[key];
      }
    }

    try {
      const response = await authService.editUser(user.username, payload);
      console.log("API Response:", response);

      if (response) {
        toast.success("Cập nhật thông tin thành công!");
        setUser({ ...user, ...payload });
        setIsEditing(false);
      } else {
        toast.error(response?.message || "Cập nhật thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      toast.error(error.message || "Đã có lỗi xảy ra khi cập nhật thông tin.");
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center gap-3 mt-3 mb-3">
        <Link to="/users">Tài Khoản</Link>
        <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
        <div>Thông tin cá nhân</div>
      </div>
      <h1>Thông tin cá nhân</h1>
      {!isEditing ? (
        <div className="card p-4">
          <p>
            <span className="fw-bold">First Name:</span> {getDisplayValue(user.firstName)}
          </p>
          <p>
            <span className="fw-bold">Last Name:</span> {getDisplayValue(user.lastName)}
          </p>
          <p>
            <span className="fw-bold">Age:</span> {getDisplayValue(user.age)}
          </p>
          <p>
            <span className="fw-bold">Gender:</span> {getDisplayValue(user.gender)}
          </p>
          <p>
            <span className="fw-bold">Email:</span> {getDisplayValue(user.email)}
          </p>
          <p>
            <span className="fw-bold">Phone:</span> {getDisplayValue(user.phone)}
          </p>
          <p>
            <span className="fw-bold">Username:</span> {getDisplayValue(user.username)}
          </p>
          <p>
            <span className="fw-bold">Birth Date:</span> {getDisplayValue(user.birthDate)}
          </p>
          <p>
            <span className="fw-bold">Email Verified At:</span> {user.emailVerifiedAt ? "Tài khoản đã được xác minh" : "Tài khoản chưa xác minh"}
          </p>
          <p>
            <span className="fw-bold">Created At:</span> {new Date(user.createdAt).toLocaleString()}
          </p>
          <Button primary size="medium" onClick={() => setIsEditing(true)}>
            Sửa thông tin
          </Button>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card p-3 w-50 shadow-lg">
            <h2 className="text-center">Chỉnh sửa thông tin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <InputText placeholder="Nhập tên" name="firstName" register={register} message={errors.firstName?.message} />
              </div>
              <div className="mb-3">
                <InputText placeholder="Nhập họ" name="lastName" register={register} message={errors.lastName?.message} />
              </div>
              <div className="mb-3">
                <InputText placeholder="Nhập tuổi" name="age" register={register} message={errors.age?.message} />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Giới tính
                </label>
                <select {...register("gender")} className="form-select">
                  <option value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
                {errors.gender && <div className="text-danger">{errors.gender.message}</div>}
              </div>
              <div className="mb-3">
                <InputText placeholder="Nhập email" name="email" register={register} message={errors.email?.message} />
              </div>
              <div className="mb-3">
                <InputText placeholder="Nhập số điện thoại" name="phone" register={register} message={errors.phone?.message} />
              </div>
              <div className="mb-3">
                <InputText placeholder="Nhập username" name="username" register={register} message={errors.username?.message} />
              </div>
              <div className="mb-3">
                <InputText type="date" name="birthDate" register={register} message={errors.birthDate?.message} placeholder="Nhập ngày sinh" />
              </div>
              <div className="d-flex gap-3">
                <Button primary size="medium" type="submit">
                  Lưu thông tin
                </Button>
                <Button primary size="medium" onClick={() => setIsEditing(false)}>
                  Hủy
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
