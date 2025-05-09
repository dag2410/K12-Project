import authService from "@/service/authService";
import { clearToken } from "@/utils/httpRequest";

const LogOut = async (setToken) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    await authService.postLogOut();
    clearToken();
    return true;
  } catch (error) {
    console.error("Lỗi khi đăng xuất:", error);
    return false;
  }
};

export default LogOut;
