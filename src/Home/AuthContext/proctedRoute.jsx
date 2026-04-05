import { Navigate } from "react-router-dom";
import { useAuth } from "./authcontext";
import { Outlet } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user, token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
