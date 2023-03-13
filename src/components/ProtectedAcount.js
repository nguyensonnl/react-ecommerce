import { Navigate } from "react-router-dom";

//Protected route path=/account/login or path=/account/register
export const ProtectedAccountLogin = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to="/account" replace />;
};

//Protected route path=/account
export const ProtectedAccount = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/account/login" replace />;
  }
  return children;
};
