import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <a href="https://github.com/iandouglas" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/iandouglas736" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/iandouglas736" target="_blank" rel="noopener noreferrer">
            <span>Twitter</span>
            <FaTwitter />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Ian Douglas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
