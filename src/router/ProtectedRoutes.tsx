import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../reducers";
const ProtectedRoutes = () => {
  const isLogged = useSelector((state: RootState) => state.auth.token);
  if (!isLogged) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
