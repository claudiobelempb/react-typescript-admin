import { Link } from "react-router-dom";

const NavDefault = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to={"/dashboard"}
            >
              <span data-feather="home"></span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/users"}>
              <span data-feather="home"></span>
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { NavDefault };
