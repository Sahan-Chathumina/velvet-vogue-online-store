import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <p className="text-lg font-semibold">
            © {new Date().getFullYear()} VelvetVogue. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex space-x-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
