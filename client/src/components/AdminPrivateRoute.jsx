import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
function AdminPrivateRoute() {
    
    const currentUser = useSelector((state)=>state.user.currentUser)
    return currentUser.user.isAdmin?<Outlet />:<Navigate to="/signin" />
}

export default AdminPrivateRoute
