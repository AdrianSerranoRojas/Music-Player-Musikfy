import { NavLink } from "react-router-dom";

function AppHeader({ ...props }) {

  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <NavLink
              className="navbar-brand"
              to="/"
            >
              Home
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
