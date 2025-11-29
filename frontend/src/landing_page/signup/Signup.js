import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/signup", data);
      setMsg(res.data.message);
      navigate("/login");
    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <p style={{ color: "red", textAlign: "center" }}>{msg}</p>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />

        <button className="btn-auth">Signup</button>

        <p style={{ marginTop: "14px", textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#387ed1", textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
