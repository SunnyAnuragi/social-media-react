import { FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
      <a className="navbar-brand" href="#">
        🔥 FameFlow
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="visually-hidden">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>

              <a className="dropdown-item" href="#">
                Another action
              </a>

              <div className="dropdown-divider"></div>

              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search posts, users, tags..."
            aria-label="Search"
          />

          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
          {/* <div className="d-flex align-items-center gap-3">
            <FaBell size={22} />
            <FaUserCircle size={28} />
          </div> */}
        </form>
      </div>
    </nav>
  );
};

export default Header;
