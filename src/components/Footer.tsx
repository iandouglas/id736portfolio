import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiBluesky } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/iandouglas736',
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iandouglas736',
      icon: FaTwitter,
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/iandouglas736.com',
      icon: SiBluesky,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/iandouglas',
      icon: FaGithub,
    },
  ];

  return (
    <footer className="bg-secondary-900 border-t border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="mb-4 md:mb-0">
            <p className="text-secondary-300 text-sm">
              <a 
                href="mailto:iandouglas736@gmail.com" 
                className="hover:text-primary-400 transition-colors duration-200"
              >
                iandouglas736@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-secondary-800">
          <p className="text-center text-secondary-500 text-sm">
            © {new Date().getFullYear()} Ian Douglas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
