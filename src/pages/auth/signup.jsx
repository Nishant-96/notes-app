import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth/auth-context";
import { formValidationSignUp } from "../../utils";
import "./auth.css";
export function SignUp() {
  const { signUpHandler } = useAuth();
  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const signUpClickHandler = (userDetails) => {
    const validation = formValidationSignUp({ ...userDetails });
    try {
      if (validation.type) {
        signUpHandler(
          userDetails.email,
          userDetails.userName,
          userDetails.password,
          userDetails.confirmPass
        );
      } else {
        throw new Error(validation.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="notes">
      <div className="login-wrapper">
        <div className="login-content signup-content">
          <h3>Sign Up</h3>
          <div className="login-wrapper-content">
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              id="username"
              name="username"
              placeholder="Enter your name"
              value={userCredentials.userName}
              onChange={(event) =>
                setUserCredentials({
                  ...userCredentials,
                  userName: event.target.value,
                })
              }
            />
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
            <label htmlFor="confirm-pwd">Confirm Password:</label>
            <input
              type="password"
              id="confirm-pwd"
              name="confirm-pwd"
              placeholder="Confirm Password"
              value={userCredentials.confirmPass}
              onChange={(event) =>
                setUserCredentials({
                  ...userCredentials,
                  confirmPass: event.target.value,
                })
              }
            />
            <label>
              <input type="checkbox" />I Accept all terms and Conditions
            </label>
            <button
              className="btn btn-primary auth-btn"
              onClick={() => signUpClickHandler(userCredentials)}
            >
              Sign Up
            </button>
            <h4>Already Have an Account ?</h4>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
