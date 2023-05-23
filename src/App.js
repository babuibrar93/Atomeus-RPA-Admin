import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./pages/landingpage/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Sidebar from "./common/sidebar/sidebar";
import Navbar from "./common/navbar/navbar";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
