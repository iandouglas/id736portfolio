import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';

const socialMedia = [
  {
    name: 'Email',
    url: 'mailto:iandouglas736@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/iandouglas736',
    icon: <FaLinkedin />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/iandouglas736',
    icon: <FaTwitter />,
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/iandouglas736.com',
    icon: <SiBluesky />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/iandouglas',
    icon: <FaGithub />,
  },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-6">
      {socialMedia.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <span className="sr-only">{social.name}</span>
          {React.cloneElement(social.icon, { size: 24 })}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
