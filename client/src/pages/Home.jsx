import CodingImage from "../components/CodingImage";
import Dot from "../components/Dot";
function Home() {
  return (
    <div className="home w-full h-screen relative  ">
      <Dot />
      <div className="container mx-auto mt-[150px] flex justify-between items-center">
        <div className="hero_info  w-6/12 ">
          <div className="hero_info_title text-6xl font-semibold leading-[70px] mb-7">
            Hi, I'm <span className="text-[#6246EA]">Aneesh</span>
            <br />
            I'm a Full Stack Developer
          </div>
          <div className="hero_info_description text-[#C0C0C0] px-2 border-l-2 border-black mb-7">
            On this blog I share tips and tricks, frameworks, projects,
            tutorials, etc Make sure you subscribe to get the latest updates.
          </div>
          <div className="hero_info_email">
            <input
              type="text"
              id="email"
              placeholder="Enter your email here..."
              className="py-5 pl-5 pr-52 bg-white mr-4 outline-none "
            />
            <button className="py-5 px-[23px] bg-[#6246EA] text-white rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <CodingImage></CodingImage>
      </div>
    </div>
  );
}

export default Home;
