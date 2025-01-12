import React, { useState } from "react";
import { Container } from "react-bootstrap";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
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
