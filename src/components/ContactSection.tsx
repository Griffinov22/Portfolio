import { FormEvent, useRef, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import airplane from "../img/paper-plane.svg";
import emailJs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import ReCAPTCHAInstance from "react-google-recaptcha";

interface IContactForm {
  name: string;
  email: string;
  body: string;
}
const ContactSection = () => {
  const captchaRef = useRef<ReCAPTCHAInstance>(null);
  const [formData, setFormData] = useState<IContactForm>({
    name: "",
    email: "",
    body: "",
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errorFlag: boolean = false;
    // reset validation messages
    document.querySelectorAll(".validation").forEach((el) => {
      el.textContent = "";
    });

    for (const [formItem, formVal] of Object.entries(formData)) {
      if (formVal.trim() == "") {
        errorFlag = true;
        const validationElement = document.querySelector<HTMLSpanElement>(
          `.validation-${formItem}`
        );
        if (validationElement) {
          validationElement.textContent = formItem + " is required";
        }
      }
    }
    // do not continue to try to send if no name, email, or body
    if (errorFlag) return;

    if (captchaRef.current?.getValue()) {
      emailJs
        .sendForm(
          import.meta.env["VITE_EMAILJS_SERVICE_ID"],
          import.meta.env["VITE_EMAILJS_TEMPLATE_ID"],
          e.currentTarget,
          import.meta.env["VITE_EMAILJS_PUBLIC_KEY"]
        )
        .then(
          () => {
            // success
            setFormData({ name: "", email: "", body: "" });
            toast.success(`Your submission was successful`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
            });
          },
          () => {
            // error
            toast.error("Your submission failed. Please try again later.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
            });
          }
        );
    } else {
      const reCaptchaValidation =
        document.querySelector<HTMLSpanElement>(`.validation-recaptcha`);
      reCaptchaValidation!.textContent = "Please solve the ReCaptcha";
    }

    // reset reCaptcha
    captchaRef.current?.reset();
  };

  return (
    <>
      <ToastContainer />
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
          onSubmit={submitHandler}
          id="contact-form"
          className="w-50 mx-auto d-flex flex-column gap-2 form-container pt-3 pb-5"
          noValidate>
          <div className="d-flex flex-column gap-2">
            <label htmlFor="user_name">
              Name<span className="validation validation-name"></span>
            </label>

            <input
              id="user_name"
              name="user_name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Name"
              className="w-100"
            />
          </div>
          <div className="d-flex flex-column gap-2">
            <label htmlFor="user_email">
              Email<span className="validation validation-email"></span>
            </label>

            <input
              id="user_email"
              name="user_email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Email"
              className="w-100"
            />
          </div>
          <div className="d-flex flex-column gap-2">
            <label htmlFor="user_body">
              Message<span className="validation validation-body"></span>
            </label>
            <textarea
              rows={2}
              id="user_body"
              name="user_body"
              value={formData.body}
              onChange={(e) => setFormData((prev) => ({ ...prev, body: e.target.value }))}
              placeholder="Body"
              className="w-100"></textarea>
          </div>
          <div className="d-flex flex-column gap-2">
            <label>
              reCAPTCHA
              <span className="validation validation-recaptcha"></span>
            </label>
            <ReCAPTCHA
              sitekey="6Lf9oaAnAAAAAIaiNK1YMX8TrK2KOX1jVk3c3MWP"
              ref={captchaRef}
              data-size="compact"
              className="mx-auto"
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </section>
    </>
  );
};
export default ContactSection;
