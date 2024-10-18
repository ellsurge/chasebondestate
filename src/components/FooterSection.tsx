import React from 'react';

export default function FooterSection() {
  return (
    <footer className="bg-light text-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Logo / Title */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-light text-dark sans ">powered by vbyte</h1>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a href="#" className=" text-dark sans hover:text-primary transition-colors">About</a>
            <a href="#" className="text-dark sans hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-dark sans hover:text-primary transition-colors">Contact</a>
            <a href="#" className="text-dark sans hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 mb-4 border-t border-border"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-dark sans">
          © {new Date().getFullYear()} chasebondestate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
