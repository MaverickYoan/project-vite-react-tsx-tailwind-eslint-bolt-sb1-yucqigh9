import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Non Trouvée</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link 
        to="/" 
        className="btn btn-primary flex items-center"
      >
        <Home size={18} className="mr-2" />
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;