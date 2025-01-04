import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Signin";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/signin"} element={<SignIn />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
