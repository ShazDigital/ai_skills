import React, { useState } from "react";
import Modal from "./Modal";

const Footer: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:info@thesupply.com";
  };

  return (
    <footer className="w-full py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AI Skill Tracker
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsAboutOpen(true)}
              className="text-sm text-gray-600 hover:text-[#c66d5a] transition-colors"
            >
              About
            </button>
            <button
              onClick={handleContactClick}
              className="text-sm text-gray-600 hover:text-[#c66d5a] transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => setIsLegalOpen(true)}
              className="text-sm text-gray-600 hover:text-[#c66d5a] transition-colors"
            >
              Legal
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)}>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">About AI Skill Tracker</h3>
          <p className="text-gray-600 mb-4">
            As AI rapidly transforms the professional landscape, both
            organizations and individuals face a growing challenge: how to
            effectively communicate and evaluate AI expertise. AI Skill Tracker
            bridges this gap by providing a standardized way to define, measure,
            and share AI capabilities across various domains - from prompt
            engineering to machine learning. Whether you're a professional
            showcasing your AI skills, a company seeking specific AI talent, or
            a client looking to understand AI service providers, our tool helps
            create clarity in an increasingly complex AI ecosystem.
          </p>
          <p className="text-gray-600 text-sm">
            This is a quicky vibe-coded concept brought to you by TheSupply.com
            - Send over notes or ideas to make this tool even more useful
          </p>
        </div>
      </Modal>

      <Modal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)}>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <p className="text-gray-600">Coming soon</p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
