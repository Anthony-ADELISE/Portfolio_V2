import React from "react";

// import image
import sendEmail from "../assets/img/sendmail.svg";

const ContactForm = () => {
  return (
    <section className="min-h-[600px] pt-20 text-center">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row-reverse lg:justify-around">
          {/* form */}
          <div>
            <form className="flex flex-col text-left space-y-2 pt-10 font-bold pb-8 lg:pt-0">
              <label
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="500"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
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
                name="emmail"
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
                type="message"
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
              <img className="w-[400px]" src={sendEmail} alt="email svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
