import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, SideNav } from "./components";
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
import { Forgot } from "./pages/auth/forgot";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Notes /> */}
      {/* <Trash /> */}
      {/* <Label /> */}
      {/* <Archive /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Forgot /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/label" element={<Label />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
