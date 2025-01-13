import React, { useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post(
        "http://localhost:3800/login", 
        formData
      );

      // Handle successful login
      const { token, id } = response.data;
      setSuccess("Login successful!")
      navigate('/home');
      setError("");

      localStorage.setItem("token", token);
      localStorage.setItem("userId", id);
      console.log("User logged in successfully:", { token, id });
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
      setSuccess("");
    }
  };

  return (
    <div className="register">
      <Container className="box-login">
        <div className="registration-container">
          <h3>Login Your Account</h3>
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <a href="/login" style={{ textAlign: "left", color: "#0097a1" }}>
              Forget Password?
            </a>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <button type="submit" className="submit-button">
              Login
            </button>
            <p>
              Not a member?{" "}
              <a href="/" style={{ color: "#0097a1" }}>
                Register Now
              </a>
            </p>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
