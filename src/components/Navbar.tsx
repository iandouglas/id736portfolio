import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gun-metal-900 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              iandouglas736
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/public-speaking" className="text-gray-300 hover:bg-gun-metal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Public Speaking
              </Link>
              <Link href="/talks" className="text-gray-300 hover:bg-gun-metal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Talks
              </Link>
              <Link href="/videos" className="text-gray-300 hover:bg-gun-metal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Videos
              </Link>
              <Link href="/blogs" className="text-gray-300 hover:bg-gun-metal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
