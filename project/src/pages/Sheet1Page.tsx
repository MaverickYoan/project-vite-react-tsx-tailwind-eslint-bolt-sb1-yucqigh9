import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sheet1Page = () => {
  return (
    <div>
      <h1>Aperçu des données</h1>
      
      <section className="page-section">
        <h2>Aperçu des éléments HTML</h2>
        <p className="mb-6">
          La structure d'un document HTML se compose de divers éléments qui définissent la structure et le contenu des pages Web.
          Voici un aperçu complet des éléments HTML clés et de leur utilisation.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Élément</th>
                <th>Description</th>
                <th>Utilisation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>&lt;html&gt;</code></td>
                <td>Élément racine d'une page HTML</td>
                <td>Contient tous les autres éléments HTML</td>
              </tr>
              <tr>
                <td><code>&lt;head&gt;</code></td>
                <td>Contient des informations méta</td>
                <td>Titre, styles, scripts, balises méta</td>
              </tr>
              <tr>
                <td><code>&lt;title&gt;</code></td>
                <td>Titre de la page</td>
                <td>Apparaît dans l'onglet du navigateur</td>
              </tr>
              <tr>
                <td><code>&lt;body&gt;</code></td>
                <td>Corps du document</td>
                <td>Contient tout le contenu visible</td>
              </tr>
              <tr>
                <td><code>&lt;h1&gt; to &lt;h6&gt;</code></td>
                <td>En-têtes</td>
                <td>Titres de section (h1 le plus important, h6 le moins)</td>
              </tr>
              <tr>
                <td><code>&lt;p&gt;</code></td>
                <td>Paragraphe</td>
                <td>Blocs de texte</td>
              </tr>
              <tr>
                <td><code>&lt;a&gt;</code></td>
                <td>Liens</td>
                <td>Hyperliens vers d'autres pages</td>
              </tr>
              <tr>
                <td><code>&lt;img&gt;</code></td>
                <td>Image</td>
                <td>Intégrer des images</td>
              </tr>
              <tr>
                <td><code>&lt;div&gt;</code></td>
                <td>Division</td>
                <td>Conteneur pour le contenu de flux</td>
              </tr>
              <tr>
                <td><code>&lt;span&gt;</code></td>
                <td>Conteneur en ligne</td>
                <td>Styliser des portions de texte</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="page-section">
        <h2>Structure d'un document HTML</h2>
        <p>Un document HTML de base suit cette structure :</p>

        <div className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>En-tête du site Web</h1>
    <nav>
      <!-- Liens de navigation -->
    </nav>
  </header>
  
  <main>
    <section>
      <h2>Titre de la section</h2>
      <p>Le contenu va ici...</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2025 Mon site web</p>
  </footer>
  
  <script src="script.js"></script>
</body>
</html>`}</code>
          </pre>
        </div>
        
        <p>
          Cette structure fournit une base pour créer des documents HTML bien organisés et sémantiques
          qui sont accessibles et optimisés pour le référencement.
        </p>
      </section>
      
      <section className="page-section">
        <h2>Éléments sémantiques</h2>
        <p>
          HTML5 a introduit des éléments sémantiques qui décrivent clairement leur signification à la fois pour le navigateur et le développeur.
          L'utilisation d'éléments sémantiques améliore l'accessibilité, le référencement et la lisibilité du code.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 border rounded shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Éléments structurels</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><code>&lt;header&gt;</code> - En-tête de page ou de section</li>
              <li><code>&lt;nav&gt;</code> - Liens de navigation</li>
              <li><code>&lt;main&gt;</code> - Zone de contenu principal</li>
              <li><code>&lt;section&gt;</code> - Section autonome</li>
              <li><code>&lt;article&gt;</code> - Contenu indépendant</li>
              <li><code>&lt;aside&gt;</code> - Contenu connexe</li>
              <li><code>&lt;footer&gt;</code> - Pied de page ou de section</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 border rounded shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Éléments de texte</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><code>&lt;figure&gt; &lt;figcaption&gt;</code> - Images avec légendes</li>
              <li><code>&lt;time&gt;</code> - Temps/dates</li>
              <li><code>&lt;mark&gt;</code> - Texte surligné</li>
              <li><code>&lt;details&gt; &lt;summary&gt;</code> - Détails extensibles</li>
              <li><code>&lt;em&gt;</code> - Texte en italique</li>
              <li><code>&lt;strong&gt;</code> - Texte en gras</li>
              <li><code>&lt;cite&gt;</code> - Référence de citation</li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="mt-8 flex justify-end">
        <Link to="/sheet2" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          Voir les indicateurs clés
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Sheet1Page;