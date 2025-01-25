import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Dot from "./components/Dot";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/signin"} element={<SignIn />} />

          <Route path={"/about"} element={<About />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/dot"} element={<Dot />} />
          <Route path={"/reset-password"} element={<ResetPassword />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
