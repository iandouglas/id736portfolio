import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-green-400">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/iandouglas" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/iandouglas736" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/iandouglas736" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-green-400">
          &copy; {new Date().getFullYear()} Ian Douglas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
