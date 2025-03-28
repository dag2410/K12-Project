import * as httpRequest from "@/utils/httpRequest";

export const getCurrentUser = async () => {
  const response = await httpRequest.get("/auth/me");
  return response;
};
export const postRegister = async (formData) => {
  const response = await httpRequest.post("/auth/register", formData);
  return response;
};
export const postLogOut = async (formData) => {
  const response = await httpRequest.post("/auth/logout");
  return response;
};
export const postLogIn = async (email, password) => {
  const response = await httpRequest.post("/auth/login", { email, password });
  return response;
};

export default {
  getCurrentUser,
  postRegister,
  postLogOut,
  postLogIn,
};
