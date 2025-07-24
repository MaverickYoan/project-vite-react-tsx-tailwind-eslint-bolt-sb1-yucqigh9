import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/sheet1', label: 'Data Overview' },
    { path: '/sheet2', label: 'Key Metrics' },
    { path: '/sheet3', label: 'Analysis' },
    { path: '/sheet4', label: 'Statistics' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Données Excel
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`transition-colors hover:text-blue-600 ${isActive(link.path) ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-2 bg-gray-50 rounded-lg">
            <ul className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={`block px-4 py-2 ${isActive(link.path) ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;