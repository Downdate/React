import { Navigate } from "react-router-dom";
import { getAuthState, hasAnyRole } from "../Utility/AuthUtility";

function RoleBasedRoute({ children, allowedRoles }) {
  const { isAuthenticated, currentUser } = getAuthState();
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  if (!hasAnyRole(allowedRoles)) {
    return (
      <div
        className="container"
        style={{ textAlign: "center", padding: "40px" }}
      >
        <h1>Access Denied</h1>

        <p>You don't have the required role!</p>

        <p>
          {" "}
          your current role is <strong> {currentUser?.role}</strong>
        </p>

        <p>
          Required role : <strong>{allowedRoles.join(", ")}</strong>
        </p>

        <button
          onClick={() => {
            window.history.back();
          }}
          className="btn btn-outline-danger"
        >
          Go Back
        </button>
      </div>
    );
  }

  return children;
}

export default RoleBasedRoute;
