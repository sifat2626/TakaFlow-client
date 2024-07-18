/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useAuth();
  console.log(user, loading);
  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate state={location.pathname} to={"/auth"} />;
  return <div>{children}</div>;
}

export default PrivateRoute;
