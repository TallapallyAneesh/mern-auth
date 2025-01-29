import { RiTwitterXFill } from "react-icons/ri";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { useSelector } from "react-redux";
function Footer() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <footer className="bg-[#C0C0C0] dark:bg-[#3d2c97]  py-4">
      <div className="mx-auto container flex justify-between p-2 pb-7 border-b-2 border-[grey]   ">
        <div className="flex flex-col gap-1 ">
          <div>
            <span className="text-xl font-medium">aneesh</span>
            <span className="text-sm text-[#6246EA]">.Blog</span>
          </div>
          <p className="text-xs font-thin">
            a blog by <strong>Aneesh Tallapally</strong>
          </p>
          <div className="flex gap-2 mt-2">
            <a href="#">
              <RiTwitterXFill className="text-sm" />
            </a>
            <a href="#">
              <FiGithub className="text-sm" />
            </a>
            <a href="#">
              <FiInstagram className="text-sm" />
            </a>
          </div>
        </div>

        <div className="text-xs">
          <span className="text-md font-semibold">CATEGORY</span>
          <nav className="list-none flex flex-col gap-2 mt-2">
            <li>CSS</li>
            <li>Javascript</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>More Category</li>
          </nav>
        </div>
        <div className="text-xs">
          <span className="text-md font-semibold">ABOUT ME</span>
          <nav className="list-none flex flex-col gap-2 mt-2">
            <li>About me</li>
            <li>Projects</li>
            <li>Achievements</li>
          </nav>
        </div>
        <div className="text-xs">
          <span className="text-md font-semibold">GET IN TOUCH</span>
          <nav className="list-none flex flex-col gap-2 mt-2">
            <li>+91 8179922460</li>
            <li>thallapallyaneesh7864@gmail.com</li>
          </nav>
        </div>
      </div>
      <div className="text-xs mx-auto container flex justify-between p-2 py-4">
        <p>© {new Date().getFullYear()} aneesh.Blog </p>
        <span>Made with ❤️ Warangal,Telangana</span>
      </div>
    </footer>
  );
}

export default Footer;
