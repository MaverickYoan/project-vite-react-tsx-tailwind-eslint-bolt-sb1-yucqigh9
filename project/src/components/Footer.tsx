import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Excel Data</h3>
            <p className="text-gray-300">
              A comprehensive website showcasing information from your Excel spreadsheets.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sheet1" className="text-gray-300 hover:text-white transition-colors">
                  Data Overview
                </Link>
              </li>
              <li>
                <Link to="/sheet2" className="text-gray-300 hover:text-white transition-colors">
                  Key Metrics
                </Link>
              </li>
              <li>
                <Link to="/sheet3" className="text-gray-300 hover:text-white transition-colors">
                  Analysis
                </Link>
              </li>
              <li>
                <Link to="/sheet4" className="text-gray-300 hover:text-white transition-colors">
                  Statistics
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <p className="text-gray-300 mb-2">
              Email: contact@example.com
            </p>
            <p className="text-gray-300">
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Excel Data. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;