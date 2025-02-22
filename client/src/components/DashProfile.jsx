import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { signOut } from "../features/users/userSlice.js";
import { useNavigate } from "react-router-dom";

function DashProfile() {
    const currentUser = useSelector(state => state.user.currentUser);
    const filePicker = useRef(null);
    const [username, setUsername] = useState(currentUser.user.username);
    const [email, setEmail] = useState(currentUser.user.email);
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleChange(e) {
        if (e.target.id === "username") {
            setUsername(e.target.value);
        }
        if (e.target.id === "email") {
            setEmail(e.target.value);
        }
        if (e.target.id === "password") {
            setPassword(e.target.value);
        }
    }

    function handleImage(e) {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImageURL(URL.createObjectURL(file));
        }
    }

    async function uploadImage() {
        console.log("uploading image");
        // Add your image upload logic here
    }

    useEffect(() => {
        if (image) {
            uploadImage();
        }
    }, [image]);

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

    function handleSubmit(e) {
        e.preventDefault();
        // Add your form submission logic here
    }

    return (
        <div className="flex flex-col gap-3 items-center mx-auto h-screen mt-10 w-3/6">
            <h1 className="text-3xl">Profile</h1>
            <form className="flex flex-col p-2 w-10/12 gap-6" onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleImage} ref={filePicker} hidden />
                <div className="w-32 h-32 self-center">
                    <img src={imageURL || currentUser.user.photoUrl} className="rounded-full w-full border-8 border-[#C0C0C0]" onClick={() => filePicker.current.click()} />
                </div>
                <input id="username" type="text" placeholder="username" className="p-3 outline-none border-2 rounded-md border-[#6246EA] text-[#6246EA]" onChange={handleChange} value={username} />
                <input id="email" type="text" className="p-3 outline-none border-2 rounded-md border-[#6246EA] text-[#6246EA]" onChange={handleChange} value={email} />
                <input id="password" type="password" placeholder="password" className="p-3 outline-none border-2 rounded-md border-[#6246EA] text-[#6246EA]" onChange={handleChange} value={password} />
                <button className="bg-[#6246EA] text-white text-center p-2">Update</button>
            </form>
            <div className="text-red-600 flex p-2 justify-between w-10/12">
                <span>Delete Account</span>
                <button onClick={handleSignout}>Sign Out</button>
            </div>
        </div>
    );
}

export default DashProfile;