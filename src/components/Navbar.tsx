import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-eerie_black bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-vanilla">
              Ian Douglas
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-pearl hover:bg-eerie_black-600 hover:text-vanilla rounded-md px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/full-portfolio" className="text-pearl hover:bg-eerie_black-600 hover:text-vanilla rounded-md px-3 py-2 text-sm font-medium">
                Work
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
