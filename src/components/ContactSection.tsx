import airplane from "../img/paper-plane.svg";

const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="contact-section overflow-hidden position-relative">
      <div className="oval secondary">
        <div className="airplane-container">
          <img
            src={airplane}
            alt="paper airplane"
          />
        </div>
      </div>
      <div className="oval bg-white oval-offset"></div>
      <h2 className="section-header text-center">
        We work better together. Send me a message.
      </h2>
      <p className="sub-header text-center text-white low-opacity">
        Freelancing, internships, or if you just want to say &lsquo;hi&rsquo;
      </p>
      <form
        method="POST"
        id="contact-form"
        className="w-50 mx-auto d-flex flex-column gap-2 form-container pt-3"
        noValidate>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="user_name">
            Name<span className="validation"></span>
          </label>

          <input
            id="user_name"
            name="user_name"
            type="text"
            placeholder="Name"
            className="w-100"
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="user_email">
            Email<span className="validation"></span>
          </label>

          <input
            id="user_email"
            name="user_email"
            type="email"
            placeholder="Email"
            className="w-100"
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="user_body">
            Message<span className="validation"></span>
          </label>
          <textarea
            rows={2}
            id="user_body"
            name="user_body"
            placeholder="Body"
            className="w-100"></textarea>
        </div>
        <div className="d-flex flex-column gap-2">
          <label>
            reCAPTCHA
            <span className="validation"></span>
          </label>
          <div
            style={{ alignSelf: "center" }}
            className="g-recaptcha"
            data-sitekey="6Lf9oaAnAAAAAIaiNK1YMX8TrK2KOX1jVk3c3MWP"></div>
        </div>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};
export default ContactSection;
