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
import PrivateRoute from "./components/PrivateRoute";
import Home2 from "./pages/Home2";
function App() {
  return (
    <div className="App ">
      <ToastContainer />

      <BrowserRouter>
       <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/home"} element={<Home2 />} />
          <Route path={"/projects"} element={<Projects />} />
          
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/signin"} element={<SignIn />} />
<Route element={<PrivateRoute />}>
<Route path={"/dashboard"} element={<Dashboard />} />
</Route>
          <Route path={"/about"} element={<About />} />
          {/* <Route path={"/profile"} element={<Profile />} /> */}
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
