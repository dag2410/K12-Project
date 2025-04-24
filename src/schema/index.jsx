import * as yup from "yup";

export const registerSchema = yup
  .object({
    firstName: yup.string().trim().required("Trường này là bắt buộc"),
    lastName: yup.string().trim().required("Trường này là bắt buộc"),
    email: yup.string().trim().email("Vui lòng nhập đúng định dạng email"),
    password: yup
      .string()
      .trim()
      .min(8, "Mật khẩu cần ít nhất 8 ký tự")
      .required("Trường này là bắt buộc"),
    password_confirmation: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Mật khẩu không khớp")
      .required("Trường này là bắt buộc"),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .email("Vui lòng nhập đúng định dạng email")
      .required("Trường này là bắt buộc")
      .trim(),
    password: yup
      .string()
      .trim()
      .min(8, "Mật khẩu cần ít nhất 8 ký tự")
      .required("Trường này là bắt buộc"),
  })
  .required();

export const editSchema = yup.object({
  firstName: yup.string().trim().required("Trường này là bắt buộc"),
  lastName: yup.string().trim().required("Trường này là bắt buộc"),
  age: yup
    .number()
    .integer("Tuổi phải là số nguyên")
    .required("Trường này là bắt buộc"),
  gender: yup
    .string()
    .oneOf(["male", "female"], "Giới tính không hợp lệ")
    .required("Trường này là bắt buộc"),
  email: yup
    .string()
    .trim()
    .email("Vui lòng nhập đúng định dạng email")
    .required("Trường này là bắt buộc"),
  phone: yup.string().required("Trường này là bắt buộc"),
  username: yup
    .string()
    .trim()
    .min(4, "Tên người dùng cần ít nhất 4 ký tự")
    .required("Trường này là bắt buộc"),
  birthDate: yup
    .date()
    .typeError("Ngày sinh không hợp lệ")
    .required("Trường này là bắt buộc"),
});

export default {
  registerSchema,
  loginSchema,
  editSchema,
};
