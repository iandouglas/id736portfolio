import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <div>
        <div>
          <div>
            <Link href="/">
              Ian Douglas
            </Link>
          </div>
          <nav>
            <div>
              <Link href="/">
                Home
              </Link>
              <Link href="/full-portfolio">
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
