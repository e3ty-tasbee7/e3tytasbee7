import logo from "../assets/logo.png";

export function Navbar() {
return(
    <div
      className="p-3"
      style={{ position: "sticky", top: "0", zIndex: "1000" }}
    >
      <nav className="navbar navbar-expand-lg p-3" dir="rtl">
        <div className="container-fluid">
          <a className="navbar-brand" href="#hero">
            <img src={logo} alt="Logo" />
          </a>

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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#hero">
                  الرئيسية
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  عن الفريق
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#songs">
                  الترانيم
                </a>
              </li>
              <li>
                <a className="nav-link" href="#about">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
