import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// import image
import svgEmail from "../assets/img/sendmail.svg";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mrr4zsq",
        "portfolio_template",
        form.current,
        "xcVv-8diNh55oonxZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="min-h-[600px] pt-20 text-center">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row-reverse lg:justify-around">
          {/* form */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col text-left space-y-2 pt-14 font-bold pb-8 lg:pt-0"
            >
              <label
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="500"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="input"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="500"
              />
              <label
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-delay="500"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="input"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-delay="500"
              />
              <label
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="500"
              >
                Message
              </label>
              <textarea
                name="message"
                className="textarea"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="500"
              />
              <div
                className="pt-3"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="500"
              >
                <input
                  className="btn-contact"
                  type="submit"
                  value="Envoyer"
                  required
                />
              </div>
            </form>
          </div>
          {/* image */}
          <div className=" flex flex-col items-center lg:text-left">
            <div
              className="space-y-6"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <h1 className="text-3xl font-bold lg:text-5xl">
                Let's talk about <br /> everything !
              </h1>
              <p className="pb-5">
                Si vous avez des questions ou des propositions, n'hésitez pas !
              </p>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <img className="w-[400px]" src={svgEmail} alt="email svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
