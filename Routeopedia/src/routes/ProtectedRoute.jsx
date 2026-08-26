import { Navigate } from "react-router-dom";
import { getAuthState } from "../Utility/AuthUtility";

function ProtectedRoute({ children }) {
  const { isAuthenticated, currentUser } = getAuthState();
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default ProtectedRoute;
