import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [userState, setUserState] = useState({
    userDetails: "",
    token: JSON.parse(localStorage.getItem("AUTHENTICATION")) || "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const token = userState.token;
  const loginHandler = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      if (response.status === 200) {
        const {
          data: { foundUser, encodedToken },
        } = response;
        setUserState({ userDetails: foundUser, token: encodedToken });
        localStorage.setItem(
          "AUTHENTICATION",
          JSON.stringify({
            userDetails: foundUser,
            token: encodedToken,
          })
        );
        navigate(location?.state?.from?.pathname || "/", {
          replace: true,
        });
        toast.success(`Welcome, ${foundUser.firstName}`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error();
      toast.error(`Login Error ! ${error.response.data.errors[0]}`, {
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

  const logOutHandler = () => {
    setUserState({
      userDetails: "",
      token: "",
    });
    localStorage.removeItem("AUTHENTICATION");
    toast.success(`Logged Out`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
  };

  const signUpHandler = async (email, name, password, confirmPass) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        name,
      });
      if (response.status === 201) {
        const {
          data: { createdUser, encodedToken },
        } = response;
        setUserState({ userDetails: createdUser, token: encodedToken });
        localStorage.setItem(
          "AUTHENTICATION",
          JSON.stringify({
            userDetails: createdUser,
            token: encodedToken,
          })
        );
        toast.success(`Welcome, ${createdUser.name}`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(`Signup Error !`, {
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

  useEffect(() => {
    const authCheck = JSON.parse(localStorage.getItem("AUTHENTICATION"));
    if (authCheck) {
      setUserState({
        userDetails: authCheck.userDetails,
        token: authCheck.token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, loginHandler, logOutHandler, signUpHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider };
