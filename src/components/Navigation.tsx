'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Public Speaking', href: '/public-speaking' },
    { name: 'Tech Talks', href: '/tech-talks' },
    { name: 'Videos/Podcasts', href: '/videos' },
    { name: 'Blog Posts', href: '/blog-posts' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-baseline space-x-3 text-sm font-bold text-primary-400">
            <Image src="/logos/chatgpt_wildouglas_favicon.png" alt="Logo" width={50} height={50} />
            <span className="text-white" style={{marginLeft: -8 + 'px'}}>ian douglas</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-primary-400 border-b-2 border-primary-400'
                    : 'text-secondary-300 hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-secondary-300 hover:text-primary-400 focus:outline-none focus:text-primary-400"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
