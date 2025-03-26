import Loading from "@/components/Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const splitName = (fullName) => {
    const parts = fullName.trim().split(" ");
    const firstName = parts.pop();
    const lastName = parts.join(" ");
    return { firstName, lastName };
  };
  const validateForm = () => {
    if (!fullName.trim()) return "Vui lòng nhập họ và tên";
    if (!email.includes("@")) return "Email không hợp lệ";
    if (password.length < 8) return "Mật khẩu phải đủ 8 kí tự";
    if (password_confirmation !== password) return "Mật khẩu nhập lại không trùng với mật khẩu trên";
    return "";
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    const errorMessage = validateForm();
    if (errorMessage) {
      setErr(errorMessage);
      setLoading(false);

      return;
    }

    const { firstName, lastName } = splitName(fullName);
    const formData = { firstName, lastName, email, password, password_confirmation };

    try {
      const res = await fetch("https://api01.f8team.dev/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Đăng ký thất bại!");
      }

      localStorage.setItem("token", data.access_token);
      navigate("/");
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        <div className="card p-3 w-25 shadow-lg">
          <h2 className="text-center">Đăng kí</h2>
          {err && <p className="text-danger text-center">{err}</p>}
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label">Họ và tên</label>
              <input type="text" className="form-control" onChange={(e) => setFullName(e.target.value)} value={fullName} placeholder="Nhập họ và tên" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Nhập Email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Mật khẩu</label>
              <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Nhập mật khẩu" />
            </div>
            <div className="mb-3">
              <label className="form-label">Nhập lại mật khẩu</label>
              <input type="password" className="form-control" onChange={(e) => setPassword_confirmation(e.target.value)} value={password_confirmation} placeholder="Nhập lại mật khẩu" />
            </div>
            <button type="submit" className="btn btn-danger w-100" disabled={loading}>
              Đăng kí
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
