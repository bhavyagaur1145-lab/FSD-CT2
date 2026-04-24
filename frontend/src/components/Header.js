import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          <h1>Innovators Team Hub</h1>
          <p>Student Team Members Management Application</p>
        </div>

        <nav className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/add-member">
            Add Member
          </NavLink>
          <NavLink className="nav-link" to="/members">
            View Members
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

