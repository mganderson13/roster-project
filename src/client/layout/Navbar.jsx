import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import "./Navbar.less";

/**
 * A simple navigation bar that displays "Log In" if the user is not logged in,
 * and "Log Out" if the user is logged in.
 */
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="top">
      <h1>Student Roster</h1>
      <menu>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/students">Roster</NavLink>
        </li>
      </menu>
    </nav>
  );
}
