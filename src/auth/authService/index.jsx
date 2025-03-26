const logOut = async (setToken) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const res = await fetch("https://api01.f8team.dev/api/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Logout failed");

    localStorage.removeItem("token");
    setToken(null);
    return true;
  } catch (error) {
    console.error("Lỗi khi đăng xuất:", error);
    return false;
  }
};

export default logOut;
