import contactImage from "../../public/images/project images/contact/contact-image.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_service_id}`,
        `${import.meta.env.VITE_template_id}`,
        form.current,
        `${import.meta.env.VITE_public_key}`
      )
      .then(
        () => {
        //   console.log(result.text);
          toast.success("Your Message Has been send");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="font-rubik grid md:grid-cols-2">
      <dir>
        <img
          src={contactImage}
          className="w-full hidden md:block mt-52"
          alt=""
        />
      </dir>
      <div>
        <h2 className="mt-56 mb-8 md:mb-4 font-rubik ml-4 md:text-center md:mr-40 text-4xl font-bold">
          Contact <span className="text-orange-500">With Me</span>
        </h2>
        <div className="w-96 md:w-full max-w-md mx-2 md:mx-auto">
          <form
            ref={form}
            className="bg-orange-300 shadow-lg rounded px-8 pt-6 pb-8 mb-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="input input-bordered bg-white input-error w-full max-w-xs"
                name="user_name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="input input-bordered  bg-white input-error w-full max-w-xs"
                name="user_email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="textarea textarea-error  bg-white w-full max-w-xs"
                name="message"
                placeholder="Type your message here"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-start">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
              <Toaster position="top-right" reverseOrder={false} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
