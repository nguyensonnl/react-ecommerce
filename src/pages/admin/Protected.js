import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};
export default Protected;

export const ProtectedLogin = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};
