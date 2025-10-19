import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
  <a
    href="mailto:afajanthan@gmail.com"
    className="flex items-center gap-2 px-8 py-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition-colors text-lg"
  >
    <Mail size={24} />
    <span>afajanthan@gmail.com</span>
  </a>
  <a
    href="tel:+94711527472"
    className="flex items-center gap-2 px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors text-lg"
  >
    <Phone size={24} />
    <span>+94 71 152 74 72</span>
  </a>
</div>

      </div>
    </section>
  );
};

export default Contact;
