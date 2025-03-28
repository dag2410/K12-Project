import authService from "@/service/authService";
import httpRequest, { clearToken } from "@/utils/httpRequest";

const logOut = async (setToken) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    await authService.postLogOut();
    localStorage.removeItem("token");
    clearToken();
    return true;
  } catch (error) {
    console.error("Lỗi khi đăng xuất:", error);
    return false;
  }
};

export default logOut;
