import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, RequireAuth, Toast } from "./components";
import { useTheme } from "./hooks/themehook";
import {
  Archive,
  Home,
  Label,
  Login,
  Notes,
  PageNotFound,
  SignUp,
  Trash,
} from "./pages";


function App() {
  const { theme, changeTheme } = useTheme();
  return (
    <div className="App" id={theme}>
      <Navbar changeTheme={changeTheme} theme={theme} />
      <Toast theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/notes"
          element={
            <RequireAuth>
              <Notes theme={theme} />
            </RequireAuth>
          }
        />
        <Route
          path="/label"
          element={
            <RequireAuth>
              <Label />
            </RequireAuth>
          }
        />
        <Route
          path="/archive"
          element={
            <RequireAuth>
              <Archive />
            </RequireAuth>
          }
        />
        <Route
          path="/trash"
          element={
            <RequireAuth>
              <Trash />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
