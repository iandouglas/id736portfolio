import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

const Footer = () => {
  return (
    <footer className="bg-gun-metal-900">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center">
          <SocialMediaLinks />
        </div>
        <div className="text-center text-gray-500 mt-4">
          <p>&copy; {new Date().getFullYear()} Ian Douglas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
