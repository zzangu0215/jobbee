import React from "react";
import { FaYoutube, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="sticky bottom-0">
      <section className="bg-gray-800">
        <div className="max-w-screen-xl px-2 py-1 mx-auto space-y-3 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex justify-center mt-8 space-x-6">
            <a
              href="https://github.com/zzangu0215/npm-job-start"
              className="text-gray-400 hover:text-gray-500"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <FaYoutube size={40} />
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2021 FANTOM Corp. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
