import linkedIn from "../../img/linkedin-logo.svg";
import gitHub from "../../img/github-logo.svg";

const Footer = () => {
  return (
    <footer className="footer d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-end align-items-center gap-3">
        <a
          href="https://www.linkedin.com/in/griffinovermyer/"
          target="_blank">
          <img
            src={linkedIn}
            alt="LinkedIn logo"
          />
        </a>
        <a
          href="https://github.com/Griffinov22?tab=repositories"
          target="_blank">
          <img
            src={gitHub}
            alt="GitHub logo"
          />
        </a>
      </div>
      <h5 className="footer-quote p-0 m-0">
        There is no finish line for learning. It's a continual process.
      </h5>
      <div className="d-flex justify-content-end align-items-center gap-2 text-nowrap">
        <p className="footer-auth p-0 m-0">Griffin O</p>
        <p className="footer-auth p-0 m-0">&copy;2024</p>
      </div>
    </footer>
  );
};
export default Footer;
