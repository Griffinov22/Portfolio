import logo from "../../img/logo.svg";

const Header = () => {
  const toggleMobileMenu = () => {
    const navListOutside = document.querySelector<HTMLElement>("#nav-list-outside");
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    const [burgTop, burgMid, burgBottom] =
      hamburgerMenu!.querySelectorAll(".hamburger-row");

    burgTop.classList.toggle("topRotate");
    burgMid.classList.toggle("midRotate");
    burgBottom.classList.toggle("bottomRotate");

    navListOutside!.style.top =
      navListOutside!.style.top === "" || navListOutside!.style.top === "0px"
        ? "var(--nav-height)"
        : "0px";
  };

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
        <div
          id="hamburger-menu"
          onClick={toggleMobileMenu}>
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
        <li onClick={toggleMobileMenu}>
          <a href="#work-section">Works</a>
        </li>
        <li onClick={toggleMobileMenu}>
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
