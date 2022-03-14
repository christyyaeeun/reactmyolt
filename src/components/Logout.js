import { useNavigate, Link } from "react-router-dom";
import useAuth from "./useAuth";

function Nav() {
  const { authed, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Landing">Welcome Page</Link>
        </li>
      </ul>
      {authed && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}