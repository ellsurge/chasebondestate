import React from 'react';

const FooterSection = () => {
  return (
    <section className="py-6 bg-light sm:pt-10 lg:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-y-8 gap-x-6 items-start">
          {/* Company Logo and Description */}
          <div className="md:w-1/2 lg:w-2/3">
            <img className="w-auto h-9" src="/logo-1.png" alt="Company Logo" />
            <p className="text-base leading-relaxed text-gray-200 mt-3">
              Find Your Dream Property & Invest in Land with Confidence
            </p>
          </div>

          {/* Links Section */}
          <div className="md:w-1/2 lg:w-1/3">
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <li>
                <a
                  href="#"
                  title="About"
                  className="text-base text-gray-200 transition-all duration-200 hover:text-gray-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Properties"
                  className="text-base text-gray-200 transition-all duration-200 hover:text-gray-400"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Contact Us"
                  className="text-base text-gray-200 transition-all duration-200 hover:text-gray-400"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-10 mb-6 border-gray-400" />

        {/* Copyright */}
        <p className="text-sm text-center text-gray-300">
          © Copyright 2024, All Rights Reserved by vbyte technology
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
