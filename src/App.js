import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/landingpage/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Sidebar from "./common/sidebar/sidebar";
import Navbar from "./common/navbar/navbar";
import Login from "./pages/Auth/loginForm/login";
import ForgetPassword from "./pages/Auth/forgetPassword/forgetPassword";
import ResetPassword from "./pages/Auth/resetPassword/resetPassword";
import Register from "./pages/Auth/registerForm/registerForm";
import WatchDemo from "./pages/demo";
import DataTable from "./components/management/userManagement/userManagement";
import RobootManagement from "./components/management/robootManagement/robootManagement";

function App() {
  return (
    <>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/forget-password" &&
      window.location.pathname !== "/watch-demo" &&
      window.location.pathname !== "/dataTable" &&
      window.location.pathname !== "/reset-password" ? (
        <>
          <Sidebar />
          <Navbar />
        </>
      ) : null}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forget-password" element={<ForgetPassword />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/watch-demo" element={<WatchDemo />} />
          <Route exact path="/dataTable" element={<RobootManagement />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
