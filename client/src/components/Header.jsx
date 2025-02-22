import { Link } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useState } from "react";
import DropDown from "./DropDown";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";




function Header() {

  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    <div className=" shadow-md p-4   ">
      <nav className="blog_header flex items-center justify-between relative  ">
        <Link to="/" className=" ">
          <span className="text-2xl md:text-4xl font-medium">aneesh</span>
          <span className="text-sm text-[#6246EA]">.Blog</span>
        </Link>
        <div className="flex items-center gap-6  md:hidden">
          <IoSearch className="text-3xl " />
          <FaBars className="text-2xl cursor-pointer" />
        </div>
        <div className="hidden md:flex items-center gap-4 ">
          <ul className="flex items-center gap-4 mr-4">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <li onClick={()=>{
              console.log(theme);
              dispatch(toggleTheme())}} className="border-2 px-4 py-2 cursor-pointer rounded-full border-[#6246EA] bg-[#6246EA]"><button className="flex items-center  ">{theme==='dark'?<FaSun />:<FaMoon className=" text-white" />}</button></li>
          </ul>

          <IoSearch className="text-3xl lg:hidden " />
          <div className=" hidden md:w-96 rounded-full border border-[#6246EA]">
            <input
              type="text"
              placeholder="Search"
              className=" outline-none p-2.5 rounded-full placeholder-[#6246EA] text-[#6246EA] "
            />
          </div>

       {
        currentUser ?(
          <>
          <div className="relative"onClick={()=>setIsOpen(!isOpen)} >
            <img className="w-10 h-10 rounded-full" src={currentUser.user?.photoUrl} alt="display-profile" />
            {isOpen && <DropDown />}
            
          </div>
          </>

        ):(<Link to="/signup">
          <button className="p-3 bg-[#6246EA] rounded-md text-white">
            SignUp
          </button>
        </Link>)
       }
          
        </div>
       
      </nav>
     
    </div>
   
    
     </>
  );
}



  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen((prev) => !prev);
  // };

  // return (
  //   <nav className="navbar flex items-center justify-between p-4 shadow-md relative">
  //     <div className="logo">
  //       <h1 className="text-2xl font-medium">aneesh.Blog</h1>
  //     </div>
  //     <div className="menu flex items-center gap-4">
  //       <FaBars
  //         className="text-2xl cursor-pointer"
  //         onClick={toggleDropdown}
  //       />
  //       {isDropdownOpen && (
  //         <DropDown />
  //       )}
  //     </div>
  //   </nav>
  // );

export default Header;
