import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/auth-context";
import "./auth.css";
export function Login() {
  const { loginHandler } = useAuth();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="notes auth">
      <div className="login-wrapper">
        <div className="login-content">
          <h3>Login</h3>
          <div className="login-wrapper-content">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={userCredentials.email}
              onChange={(event) =>
                setUserCredentials({
                  ...userCredentials,
                  email: event.target.value,
                })
              }
            />
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Enter Password"
              value={userCredentials.password}
              onChange={(event) =>
                setUserCredentials({
                  ...userCredentials,
                  password: event.target.value,
                })
              }
            />
            <div>
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <Link to="/forgot-password">Forgot Your Password ?</Link>
            </div>
            <button
              className="btn btn-primary auth-btn"
              onClick={() =>
                loginHandler(userCredentials.email, userCredentials.password)
              }
            >
              Login
            </button>
            <button
              className="btn btn-primary auth-btn"
              onClick={() => loginHandler("test@gmail.com", "test12345")}
            >
              Guest Login
            </button>
            <h4>Not a member yet?</h4>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
