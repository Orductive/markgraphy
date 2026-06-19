import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Videography', path: '/videography' },
    { name: 'Photography', path: '/photography' },
  ];

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only apply sticky hide/show on videography page
      if (location.pathname === '/videography') {
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location.pathname]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <nav 
      className={`sticky top-0 z-50 bg-[var(--color-background)] border-b border-[var(--color-surface)] transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button (Left on mobile) */}
          <div className="md:hidden flex-1 flex items-center justify-start">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[var(--color-accent)] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Menu (Left) */}
          <div className="hidden md:flex flex-1 items-center justify-start space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)) 
                    ? 'text-[var(--color-accent)]' 
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo / Brand (Center) */}
          <div className="flex-1 flex justify-center items-center">
            <Link to="/" className="text-2xl font-display font-semibold tracking-wide" onClick={closeMenu}>
              MARKGRAPHY
            </Link>
          </div>

          {/* Contact CTA (Right) */}
          <div className="flex-1 flex justify-end items-center">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-sm font-medium px-5 py-2 bg-[var(--color-accent)] text-white hover:bg-red-700 transition-colors hidden md:block cursor-pointer"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-xs font-medium px-4 py-2 bg-[var(--color-accent)] text-white hover:bg-red-700 transition-colors md:hidden cursor-pointer"
            >
              Contact
            </a>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-surface)] absolute w-full left-0 border-b border-gray-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-4 text-base font-medium border-b border-gray-800 transition-colors hover:text-[var(--color-accent)] ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? 'text-[var(--color-accent)]' 
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
