import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/login", data);
      console.log("RESPONSE:", res.data);

      // Redirect unchanged
      window.location.href =
        "http://localhost:3001/?name=" +
        encodeURIComponent(res.data.name) +
        "&email=" +
        encodeURIComponent(res.data.email) +
        "&token=" +
        res.data.token;
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <p style={{ color: "red", textAlign: "center" }}>{msg}</p>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          type="email"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="btn-auth">Login</button>
      </form>
    </div>
  );
}

export default Login;
