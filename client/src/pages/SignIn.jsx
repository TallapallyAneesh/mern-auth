import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signIn } from "../features/users/userSlice";
import  GoogleAuth from "../components/GoogleAuth";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const { email, password } = formData;

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/signin", {
        email,
        password,
      });
      if (data.success == false) {
        return toast.error(data.message);
      }
      dispatch(signIn(data));
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      console.log("Error occurred:", error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className=" min-h-screen flex justify-center items-start pt-20  relative  ">
      <div className="flex  items-center gap-20">
        <div className=" flex-1 ">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <span className="text-6xl  font-medium">aneesh</span>
            <span className="text-lg text-[#6246EA]">.Blog</span>
          </div>
          <div className=" text-md mt-2 text-[#C0C0C0] px-2 ">
            This is a demo project . You can signup with your email or with
            google
          </div>
        </div>
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-[#6246EA]  "
          >
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className=" outline-none border-2 bg-gray-100  p-2 rounded-md"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className=" outline-none border-2  bg-gray-100   p-2 rounded-md"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <button className="bg-[#6246EA] text-white text-center p-2 rounded-md">
              Sign In
            </button>
          </form>
          <GoogleAuth />

          <div className="text-[#C0C0C0] mt-3">
            Dont have an account?
            <Link to="/signup">
              <span className="ml-3 text-[#6246EA] cursor-pointer">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
