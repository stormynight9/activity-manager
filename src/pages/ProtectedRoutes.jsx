import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import UserContext from "../context/user-context"

const ProtectedRoutes = () => {
    const userCtx = useContext(UserContext)


    return (
        !!userCtx.user ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoutes