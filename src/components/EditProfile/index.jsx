import Button from "@/components/Button";
import { InputText } from "@/components/InputText";
import Loading from "@/components/Loading";
import useDebounce from "@/hooks/useDebounce";
import useLoading from "@/hooks/useLoading";
import useUser from "@/hooks/useUser";
import { editSchema } from "@/schema";
import {
  checkEmail,
  checkPhone,
  checkUsername,
  editUser,
} from "@/service/authService";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProfile = ({ user, onSubmit, onCancel }) => {
  const navigate = useNavigate();
  const { username } = useParams();
  const { setUser } = useUser();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [preview, setPreview] = useState(null);
  const [selectFile, setSelectFile] = useState(null);
  const [originalAvatar, setOriginalAvatar] = useState(user?.image || null);

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
    if (user) {
      reset(user);
      setOriginalAvatar(user.image || null);
      setPreview(null);
      setSelectFile(null);
    }
  }, [user, reset, username]);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleFileChange = (e) => {
    const files = e?.target?.files;
    if (!files || files.length === 0) return;

    const file = files[0];

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setSelectFile(file);
  };

  const handleCancel = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    setSelectFile(null);
  };

  const onFormSubmit = async (data) => {
    startLoading();

    const formData = new FormData();
    for (const key in data) {
      if (data[key]) {
        if (key === "birthDate") {
          formData.append(key, new Date(data[key]).toISOString().split("T")[0]);
        } else {
          formData.append(key, data[key]);
        }
      }
    }

    if (selectFile) {
      formData.append("image", selectFile);
    }

    try {
      const response = await editUser(user.username, formData);
      console.log("api:", response);

      if (response) {
        toast.success("Cập nhật thông tin thành công!");
        const updatedUser = { ...user, ...data };
        if (response.data.image) {
          updatedUser.image = response.data.image;
        } else if (selectFile) {
          updatedUser.image = URL.createObjectURL(selectFile);
        }
        setUser(updatedUser);
        setOriginalAvatar(updatedUser.image || null);
        setPreview(null);
        setSelectFile(null);
        onCancel();
        reset(updatedUser);
      } else {
        toast.error(
          response?.message || "Cập nhật thất bại. Vui lòng thử lại."
        );
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      toast.error(error.message || "Đã có lỗi xảy ra khi cập nhật thông tin.");
    } finally {
      stopLoading();
    }
  };

  const emailValue = watch("email");
  const phoneValue = watch("phone");
  const usernameValue = watch("username");
  const debounceUserName = useDebounce(usernameValue, 800);
  const debouncePhone = useDebounce(phoneValue, 800);
  const debounceEmail = useDebounce(emailValue, 800);

  const userId = user?.id;

  useEffect(() => {
    if (!emailValue) return;

    const validateEmail = async () => {
      const isValid = await trigger("email");
      if (isValid) {
        const exists = await checkEmail(debounceEmail, userId);
        if (exists) {
          setError("email", {
            type: "manual",
            message: "Email này đã tồn tại",
          });
        } else {
          clearErrors("email");
        }
      }
    };
    validateEmail();
  }, [debounceEmail, trigger, setError, clearErrors]);

  useEffect(() => {
    if (!phoneValue) return;

    const validatePhone = async () => {
      const isValid = await trigger("phone");
      if (isValid) {
        const exists = await checkPhone(debouncePhone, userId);
        if (exists) {
          setError("phone", {
            type: "manual",
            message: "Số điện thoại này đã tồn tại",
          });
        } else {
          clearErrors("phone");
        }
      }
    };
    validatePhone();
  }, [debouncePhone, trigger, setError, clearErrors]);

  useEffect(() => {
    if (!usernameValue) return;

    const validateUsername = async () => {
      const isValid = await trigger("username");
      if (isValid) {
        const exists = await checkUsername(debounceUserName, userId);
        if (exists) {
          setError("username", {
            type: "manual",
            message: "Username này đã tồn tại",
          });
        } else {
          clearErrors("username");
        }
      }
    };
    validateUsername();
  }, [debounceUserName, trigger, setError, clearErrors]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-3 w-50 shadow-lg">
        <h2 className="text-center">Chỉnh sửa thông tin</h2>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="mb-3 text-center">
            <label className="form-label">Ảnh đại diện</label>
            <div className="mb-2">
              <img
                src={preview || originalAvatar}
                alt="Preview"
                width={150}
                height={150}
                className="rounded-circle"
                style={{ objectFit: "cover", border: "2px solid #ddd" }}
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="form-control mb-2"
            />
            {preview && (
              <div className="mt-2">
                <Button size="small" onClick={handleCancel}>
                  Hủy bỏ
                </Button>
              </div>
            )}
          </div>

          <div className="mb-3">
            <InputText
              placeholder="Nhập tên"
              name="firstName"
              register={register}
              message={errors.firstName?.message}
            />
          </div>
          <div className="mb-3">
            <InputText
              placeholder="Nhập họ"
              name="lastName"
              register={register}
              message={errors.lastName?.message}
            />
          </div>
          <div className="mb-3">
            <InputText
              placeholder="Nhập tuổi"
              name="age"
              register={register}
              message={errors.age?.message}
            />
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
            {errors.gender && (
              <div className="text-danger">{errors.gender.message}</div>
            )}
          </div>
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
              placeholder="Nhập số điện thoại"
              name="phone"
              register={register}
              message={errors.phone?.message}
            />
          </div>
          <div className="mb-3">
            <InputText
              placeholder="Nhập username"
              name="username"
              register={register}
              message={errors.username?.message}
            />
          </div>
          <div className="mb-3">
            <InputText
              type="date"
              name="birthDate"
              register={register}
              message={errors.birthDate?.message}
              placeholder="Nhập ngày sinh"
            />
          </div>
          <div className="d-flex gap-3">
            <Button primary size="medium" type="submit" disabled={isLoading}>
              Lưu thông tin
            </Button>
            <Button
              primary
              size="medium"
              onClick={onCancel}
              disabled={isLoading}
            >
              Hủy
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
