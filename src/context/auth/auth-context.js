import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logOutHandler = () => {
    setUserState({
      userDetails: "",
      token: "",
    });
    localStorage.removeItem("AUTHENTICATION");
    navigate("/");
  };

  const signUpHandler = async (email, name, password, confirmPass) => {
    try {
      if (
        email !== "" &&
        name !== "" &&
        password !== "" &&
        password === confirmPass
      ) {
        const response = await axios.post("/api/auth/signup", {
          email,
          password,
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
          navigate("/");
        }
      } else {
        throw new Error("Invalid InputCredenitial");
      }
    } catch (error) {
      console.log(error);
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
