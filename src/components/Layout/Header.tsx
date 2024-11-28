import logo from "../../img/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="d-flex align-items-center nav px-5">
        <img
          className="logo-container"
          src={logo}
          alt="logo"
        />
        <h4 className="nav-name ms-5 mb-0">Griffin Overmyer</h4>

        <ul
          id="nav-list"
          className="list-unstyled d-flex m-0 gap-5">
          <li>
            <a href="#work-section">Works</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
        <div id="hamburger-menu">
          <span
            className="hamburger-row"
            data-row="top"></span>
          <span
            className="hamburger-row"
            data-row="middle"></span>
          <span
            className="hamburger-row"
            data-row="bottom"></span>
        </div>
      </nav>
      <ul
        id="nav-list-outside"
        className="list-unstyled d-flex m-0 gap-5">
        <li>
          <a href="#work-section">Works</a>
        </li>
        <li>
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
