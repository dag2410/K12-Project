import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useQuery from "@/hooks/useQuery";
import httpRequest, { setToken } from "@/utils/httpRequest";
import config from "@/config";
import authService from "@/service/authService";

const LoginPage = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.postLogIn(email, password);
      httpRequest.setToken(res.access_token);
      navigate(query.get("continue") || config.routes.home);
    } catch (error) {
      setErr(error.response?.data?.message || "Đăng nhập thất bại.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-3 w-25 shadow-lg">
        <h2 className="text-center">Đăng Nhập</h2>
        {err && <p className="text-danger text-center">{err}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
                setErr("");
              }}
              value={email}
              placeholder="Nhập Email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
                setErr("");
              }}
              value={password}
              placeholder="Nhập mật khẩu"
            />
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
