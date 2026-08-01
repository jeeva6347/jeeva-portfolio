import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5itzfap",
        "template_bngjgfm",
        formRef.current,
        "nu2fbF_WCYMD6611f"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-slate-900 text-white pt-24 px-6"
    >
      <div className="relative max-w-lg w-full bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10">

        <h3
          className="py-6 font-bold text-2xl sm:text-3xl
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          bg-clip-text text-transparent
          tracking-tight text-center"
        >
          Contact Me
        </h3>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

          {/* Name */}
          <div className="relative flex justify-center">
            <FaUser className="absolute left-[16%] sm:left-[11%] top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-10/12 pl-12 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-indigo-400"
            />
          </div>

          {/* Email */}
          <div className="relative flex justify-center">
            <FaEnvelope className="absolute left-[16%] sm:left-[11%] top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-10/12 pl-12 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-indigo-400"
            />
          </div>

          {/* Message */}
          <div className="relative flex justify-center">
            <FaCommentDots className="absolute left-[16%] sm:left-[11%] top-4 text-gray-400" />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-10/12 pl-12 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-indigo-400 resize-none"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-36 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
            >
              Send Message
            </button>
          </div>

          {/* Divider */}
          <div className="h-px w-10/12 mx-auto bg-white/10"></div>

          {/* Heading */}
          <div className="flex items-center gap-2 w-10/12 mx-auto">
            <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
            <h3 className="text-lg font-semibold">
              Connect With Me
            </h3>
          </div>

          

          {/* LinkedIn */}
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/jeeva-l-5bb2a4387"
              target="_blank"
              rel="noreferrer"
              className="w-10/12 flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500 hover:scale-[1.02] transition-all duration-300"
            >
              <FaLinkedin className="text-3xl text-blue-500" />

              <div className="ml-3">
                <p className="text-white font-medium">
                  LinkedIn
                </p>

                <p className="text-sm text-gray-400">
                  Jeeva L
                </p>
              </div>
            </a>
          </div>

          {/* GitHub */}
          <div className="flex justify-center">
            <a
              href="https://github.com/jeeva6347"
              target="_blank"
              rel="noreferrer"
              className="w-10/12 flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500 hover:scale-[1.02] transition-all duration-300"
            >
              <FaGithub className="text-3xl text-gray-300" />

              <div className="ml-3">
                <p className="text-white font-medium">
                  GitHub
                </p>

                <p className="text-sm text-gray-400">
                  @jeeva6347
                </p>
              </div>
            </a>
          </div>

          {/* Email Card */}
          <div className="flex justify-center pb-6">
            <a
              href="mailto:jeevalawrance2004@gmail.com"
              className="w-10/12 flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500 hover:scale-[1.02] transition-all duration-300"
            >
              <FaEnvelope className="text-3xl text-red-400" />

              <div className="ml-3">
                <p className="text-white font-medium">
                  Email
                </p>

                <p className="text-sm text-gray-400">
                  jeevalawrance2004@gmail.com
                </p>
              </div>
            </a>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;