import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()
  console.log(user, "desde el private route");


  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export { PrivateRoute }