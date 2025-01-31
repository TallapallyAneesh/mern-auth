import CodingImage from "../components/CodingImage";

import ScrollIcon from "../components/ScrollIcon";
function Home() {
  return (
    <div className="home  h-full sm:h-screen  p-2 ">
      <div className=" max-w-full  mx-auto sm:mt-[150px] flex justify-between items-center ml-7    ">
        <div className="hero_info  w-6/12 ">
          <div className="hero_info_title text-4xl  text-center sm:text-6xl sm:text-left font-semibold sm:leading-[70px] mb-7">
            Hi, I'm <span className="text-[#6246EA]">Aneesh</span>
            <br />
            I'm a MERN Stack Developer
          </div>
          <div className="hero_info_description text-[#C0C0C0] px-2 border-l-2 border-black mb-7">
            On this blog I share tips and tricks, frameworks, projects,
            tutorials, etc. Make sure you subscribe to get the latest updates.
          </div>
          <div className="hero_info_email">
            <input
              type="text"
              id="email"
              placeholder="Enter your email here..."
              className=" py-5 px-[23px] w-[70%] rounded-md outline-none border-2  border-[#6246EA] mr-2 text-[#6246EA]  placeholder:text-[#6246EA] "
            />
            <button className="py-5 px-[23px] bg-[#6246EA] text-white rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <CodingImage></CodingImage>
        <ScrollIcon />
      </div>
    </div>
  );
}

export default Home;
