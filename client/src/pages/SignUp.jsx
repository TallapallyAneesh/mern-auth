import { useState } from "react";
import Dot from "../components/Dot";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({});

  const { username, email, password } = formData;

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (state === "Sign Up") {
        const { data } = await axios.post("/api/auth/signup", {
          username,
          email,
          password,
        });
        toast.success(data.message);
        navigate("/");
      } else {
        const { data } = await axios.post("/api/auth/signin", {
          email,
          password,
        });
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log("Error occurred:", error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className=" min-h-screen flex justify-center items-start pt-20  relative  ">
      <Dot />
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
            {state === "Sign Up" && (
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="username ">
                  Username
                </label>
                <input
                  className=" outline-none border-2  bg-gray-100   p-2 rounded-md"
                  type="text"
                  id="username"
                  onChange={handleChange}
                />
              </div>
            )}

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
              {state}
            </button>
          </form>

          {state === "Sign Up" ? (
            <div className="text-[#C0C0C0] mt-3">
              Have an account?
              <span
                onClick={() => setState("Sign In")}
                className="ml-3 text-[#6246EA] cursor-pointer"
              >
                Sign In
              </span>
            </div>
          ) : (
            <div className="text-[#C0C0C0] mt-3">
              <p
                onClick={() => navigate("/reset-password")}
                className="text-[#6246EA] mb-2 cursor-pointer"
              >
                Forgot Password?
              </p>
              Dont have an account?
              <span
                onClick={() => {
                  setState("Sign Up");
                }}
                className="ml-3 text-[#6246EA] cursor-pointer"
              >
                Sign Up
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
