import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
function PrivateRoute() {
    
    const currentUser = useSelector((state)=>state.user.currentUser)
    return currentUser?<Outlet />:<Navigate to="/signin" />
}

export default PrivateRoute
