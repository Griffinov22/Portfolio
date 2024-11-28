import arrow from "../img/arrow.svg";

const HeroSection = () => {
  return (
    <section className="d-flex align-items-center justify-content-end hero-section">
      <div className="hero-text">
        <h1>Hi, I'm Griffin.</h1>
        <div>
          <p>I'm a senior at Purdue University pursuing a degree in web development.</p>
        </div>
      </div>
      <a href="#work-header">
        <img
          className="hero-arrow"
          src={arrow}
          alt=""
        />
      </a>
    </section>
  );
};
export default HeroSection;
