
import { FaBook, FaSign, FaSignOutAlt, FaUser } from "react-icons/fa"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

function DashBar({tab}) {

        const currentUser = useSelector(state => state.user.currentUser);
const isAdmin = currentUser.user.isAdmin;
    return (
        <div className="bg-[#6246EA] dark:bg-[#3d2c97]  rounded-sm rounded-r-lg w-fill md:w-1/6 flex flex-col  p-3 text-white">
            <ul className="flex flex-col gap-3 mt-3">

                <Link  to="/dashboard?tab=profile">
                    <li className={`p-2 cursor-pointer hover:bg-[#412ea3c4] ${tab==="profile" ? "bg-[#412ea3c4]" : ""} flex items-center gap-2 text-lg `}><FaUser  /> Profile <span className="text-sm ml-4 bg-slate-300 text-black p-1 rounded-md font-semibold">{isAdmin ? "Admin" : "User"}</span></li>
                </Link>
                    
               
                <li className="p-2 cursor-pointer hover:bg-[#412ea3c4] flex items-center gap-2 text-lg">
                    <FaSignOutAlt/>
                    Signout</li>

                   { isAdmin && <Link to ='/dashboard?tab=posts'>
                
                    <li className={`p-2 cursor-pointer hover:bg-[#412ea3c4] ${tab==="posts" ? "bg-[#412ea3c4]" : ""} flex items-center gap-2 text-lg `}><FaBook  /> Posts</li>
                    
                    </Link>}
            </ul>

            
        </div>
    )
}

export default DashBar
