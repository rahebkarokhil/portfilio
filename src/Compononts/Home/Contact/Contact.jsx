
import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Icons from "./Icons";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "raheb123",
        "template_ynyre95", 
        form.current, //\
        "xvO0R3IjgrZbS9pC3" 
      )
      .then(
        (result) => {
          alert(" Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-black py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[1200px]  sm:px-6 lg:px-8">
        <motion.h1
          className="text-slate-400 font-poppins font-semibold mb-2 px-20 text-sm sm:text-base"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h1>
    
        <motion.h2
          className="font-bold font-poppins text-white leading-tight mb-8 sm:mb-12
                     text-[clamp(28px,6vw,56px)] px-20   lg:text-[clamp(40px,5vw,72px)]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Level Up your business
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 1 }}
            className="relative inline-block align-baseline text-yellow-600 font-bold ml-1
                       text-[clamp(20px,5vw,40px)] lg:text-[clamp(28px,4vw,56px)]"
          >
            +
          </motion.span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 px-5 md:px-20 lg:gap-12 xl:grid-cols-2 font-poppins">
  
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Describe your challenges and needs. Within 24 hours I will contact
              you to book a call and plan the entire strategy together on how to
              start improving your app or website. <br />
              <span className="text-yellow-500 font-semibold">
                Let's connect!
              </span>
            </p>

            <div className="mt-6 sm:mt-8">
              <Icons />
            </div>
          </motion.div>

    
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col space-y-5 sm:space-y-6 w-full max-w-[560px] lg:max-w-none"
          >
            <div className="flex flex-col">
              <label className="text-yellow-600 text-sm sm:text-base mb-1">
                Name
              </label>
              <input
                className="h-11 px-4 bg-slate-800 rounded-lg text-white w-full
                           focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                name="user_name"
                placeholder="What's your name?"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-yellow-600 text-sm sm:text-base mb-1">
                Email
              </label>
              <input
                className="h-11 px-4 bg-slate-800 rounded-lg text-white w-full
                           focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="email"
                name="user_email"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-yellow-600 text-sm sm:text-base mb-1">
                Message
              </label>
              <textarea
                className="h-40 p-4 bg-slate-800 rounded-lg text-white resize-none w-full
                           focus:outline-none focus:ring-2 focus:ring-yellow-500"
                name="message"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="border border-slate-700 shadow-inner shadow-slate-700  text-white py-3 px-6 rounded-lg font-semibold
                         hover:bg-white/5 hover:text-amber-400 transition w-full sm:w-auto"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
