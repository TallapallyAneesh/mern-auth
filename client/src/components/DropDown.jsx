import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function DropDown() {
    const currentUser = useSelector((state) => state.user.currentUser);
    const handleSignOut = async() => {
        // signout logic
        try {
            const {data} = await axios.get("/api/auth/signout");
            if(data.success){
                localStorage.clear();
            toast.success(data.message);
            }
        } catch (error) {
            console.error("Error occurred:", error);
            toast.error(error.response.data.message);
        }
    };
    return (
        <div className="absolute   top-14 right-0 w-80 bg-[#6246EA] shadow-md text-white rounded-md border border-gray-200">
        <div className="flex items-center  gap-4 border-b border-gray-200  p-4">

            <img className="rounded-full w-16 h-16" src={currentUser.user.photoUrl} alt="display-profile" />
            <div>
            <h2 className="font-semibold text-md">{currentUser.user.username}</h2>
            <p className="text-[#C0C0C0] text-xs">{currentUser.user.email}</p>
            </div>
        </div>
        <div className="">
            <ul className="p-4 text-md ">
            <Link to="/profile">
                <li className=" p-2 cursor-pointer hover:bg-[#412ea3c4]">Profile</li>
            </Link>
            <li className="p-2 cursor-pointer hover:bg-[#412ea3c4]">Settings</li>
            <li onClick={()=>handleSignOut()} className="p-2 hover:bg-[#412ea3c4] cursor-pointer">Logout</li>
            </ul>
        </div>
        </div>
    );
};
export default DropDown;