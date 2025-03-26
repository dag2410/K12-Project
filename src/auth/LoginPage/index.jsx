import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useQuery from "@/hooks/useQuery";
import httpRequest, { setToken } from "@/utils/httpRequest";

const LoginPage = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://api01.f8team.dev/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Email hoặc mật khẩu không hợp lệ.");
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.access_token);
        setToken(data.access_token);
        navigate(query.get("continue") || "/");
      })
      .catch((err) => {
        setErr(err.message);
      });
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
