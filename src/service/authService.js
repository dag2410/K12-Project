import * as httpRequest from "@/utils/httpRequest";

export const getCurrentUser = async () => {
  const response = await httpRequest.get("/auth/me");
  return response;
};

export const postRegister = async (formData) => {
  const response = await httpRequest.post("/auth/register", formData);
  return response;
};

export const postLogOut = async () => {
  const response = await httpRequest.post("/auth/logout");
  return response;
};

export const postLogIn = async (email, password) => {
  const response = await httpRequest.post("/auth/login", { email, password });
  return response;
};

export const editUser = async (username, formData) => {
  const response = await httpRequest.put(`/users/${username}`, formData);
  return response;
};
export const checkEmail = async (email, exclude_id) => {
  const response = await httpRequest.get("/auth/check-email", {
    params: {
      email,
      exclude_id,
    },
  });
  return response.exists;
};
export const checkPhone = async (phone, exclude_id) => {
  const response = await httpRequest.get("/auth/check-phone", {
    params: {
      phone,
      exclude_id,
    },
  });
  return response.exists;
};
export const checkUserName = async (username, exclude_id) => {
  const response = await httpRequest.get("/auth/check-username", {
    params: {
      username,
      exclude_id,
    },
  });
  return response.exists;
};

export default {
  getCurrentUser,
  postRegister,
  postLogOut,
  postLogIn,
  checkEmail,
  checkPhone,
  checkUserName,
  editUser,
};
