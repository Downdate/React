import reactLogo from "../assets/react.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuthState, setAuthState } from "../Utility/AuthUtility";

function MainLayout() {
  const { isAuthenticated, currentUser } = getAuthState();
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuthState(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={reactLogo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer">
                Customer
              </NavLink>
            </li>
          </ul>
          <div className="ms-auto p-2">
            <div className="d-flex align-items-center gap-2">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger"
                  to="/logout"
                >
                  Logout
                </button>
              ) : (
                <NavLink className="btn btn-primary" to="/login">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainLayout;
