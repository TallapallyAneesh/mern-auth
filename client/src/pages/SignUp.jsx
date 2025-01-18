import { useState } from "react";
import Dot from "../components/Dot";

function SignUp() {
  const [formData, setFormData] = useState({});
  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className=" min-h-screen flex justify-center items-start pt-20  relative  ">
      <Dot />
      <div className="flex  items-center gap-20">
        <div className=" flex-1 ">
          <span className="text-6xl  font-medium">aneesh</span>
          <span className="text-lg text-[#6246EA]">.Blog</span>
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
              Sign up
            </button>
          </form>
          <div className="text-[#C0C0C0] mt-3">
            Have an account?
            <span className="ml-3 text-[#6246EA]">signin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
