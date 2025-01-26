import { FaGoogle } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signIn } from "../features/users/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function GoogleAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleClick = async() => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    try {
      const result = await signInWithPopup(auth, provider);
      const {data} = await axios.post("/api/auth/google", {
        name: result.user.displayName,
        email: result.user.email,
        photoUrl: result.user.photoURL,
      });
       if (data.success == false) {
              return toast.error(data.message);
            }

      dispatch(signIn(data));
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      console.log(error)
    }

  };
  return (
    <div onClick={()=>handleGoogleClick()} className="flex items-center justify-center gap-2 p-2 border-2 border-[#6246EA] rounded-md cursor-pointer mt-4 text-[#6246EA] font-semibold hover:bg-[#6246EA] hover:text-white trasition duration-300">
      <FaGoogle className="text-xl" />
      <span>Continue with Google</span>
    </div>
  );
}

export default GoogleAuth;
