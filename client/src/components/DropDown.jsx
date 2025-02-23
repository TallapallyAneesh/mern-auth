import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "../features/users/userSlice";
function DropDown() {
    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleSignout() {
        try {
            const { data } = await axios.post("/api/user/signout");
            if (data.success === false) {
                return toast.error(data.message);
            }
            dispatch(signOut());
            toast.success(data.message);
            navigate("/signin");

        } catch (error) {
            console.log("Error occurred:", error);
            toast.error(error.response.data.message);
        }
    }
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
            <Link to="/dashboard?tab=profile">
                <li className=" p-2 cursor-pointer hover:bg-[#412ea3c4]">Profile</li>
            </Link>
            <li className="p-2 cursor-pointer hover:bg-[#412ea3c4]">Settings</li>
            <li onClick={handleSignout} className="p-2 hover:bg-[#412ea3c4] cursor-pointer">Logout</li>
            </ul>
        </div>
        </div>
    );
};
export default DropDown;