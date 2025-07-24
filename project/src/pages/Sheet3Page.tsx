import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sheet3Page = () => {
  return (
    <div>
      <h1>Analyse</h1>
      
      <section className="page-section">
        <h2>Meilleures pratiques HTML</h2>
        <p className="mb-6">
          Suivre les meilleures pratiques lors de l'écriture de HTML garantit que vos pages Web sont accessibles,
          optimisées pour le référencement et faciles à maintenir. Voici quelques directives clés à suivre :
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Structure du Document</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Déclarez toujours le DOCTYPE et utilisez HTML5 (<code>&lt;!DOCTYPE html&gt;</code>)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Définissez l'attribut de langue (<code>&lt;html lang="en"&gt;</code>)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Incluez des balises meta appropriées (charset, viewport)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utilisez des éléments sémantiques pour la structure de la page</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Ne pas utiliser d'éléments obsolètes comme <code>&lt;center&gt;</code> ou <code>&lt;font&gt;</code></span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Accessibilité</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utilisez un texte alternatif pour les images (<code>alt</code> attributes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Assurez-vous d'une hiérarchie de titres appropriée (h1 → h2 → h3)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Associez les étiquettes aux contrôles de formulaire</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utilisez des attributs ARIA lorsque cela est nécessaire</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Ne vous fiez pas uniquement à la couleur pour transmettre des informations</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">SEO</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser une description par titre unique</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Inclure des balises de description meta</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Structurer le contenu avec des titres sémantiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser un texte de lien descriptif (pas "cliquez ici")</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Ne pas cacher de contenu important avec JavaScript</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Qualité du Code</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser une indentation et un formatage cohérents</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Fermer toutes les balises correctement</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser des minuscules pour les noms d'éléments et les attributs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Citer les valeurs des attributs de manière cohérente</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Ne pas mélanger le contenu et la présentation (utiliser CSS pour le style)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="page-section">
        <h2>HTML5 Fonctionnalités</h2>
        <p>
          HTML5 a introduit de nombreuses nouvelles fonctionnalités qui améliorent les capacités de développement web.
          Voici quelques fonctionnalités clés et leurs avantages :
        </p>
        
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Fonctionnalité</th>
                <th>Description</th>
                <th>Avantages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Éléments Sémantiques</td>
                <td>Nouveaux éléments comme <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code></td>
                <td>Meilleure structure, accessibilité et SEO</td>
              </tr>
              <tr>
                <td>Audio et Vidéo</td>
                <td>Éléments natifs <code>&lt;audio&gt;</code> et <code>&lt;video&gt;</code></td>
                <td>Pas besoin de plugins tiers comme Flash</td>
              </tr>
              <tr>
                <td>Canvas</td>
                <td>API de dessin 2D</td>
                <td>Rendu dynamique et scriptable des graphiques</td>
              </tr>
              <tr>
                <td>SVG</td>
                <td>Scalable Vector Graphics</td>
                <td>Graphiques indépendants de la résolution qui s'adaptent parfaitement</td>
              </tr>
              <tr>
                <td>Web Storage</td>
                <td>localStorage et sessionStorage</td>
                <td>Stockage de données côté client au-delà des cookies</td>
              </tr>
              <tr>
                <td>Geolocation</td>
                <td>Geolocation API</td>
                <td>Accès aux informations de position géographique</td>
              </tr>
              <tr>
                <td>Web Workers</td>
                <td>Traitement en arrière-plan</td>
                <td>Exécution de scripts dans des threads d'arrière-plan</td>
              </tr>
              <tr>
                <td>Drag and Drop</td>
                <td>Fonctionnalité de glisser-déposer native</td>
                <td>Interactions utilisateur améliorées sans JavaScript</td>
              </tr>
              <tr>
                <td>Nouveaux Contrôles de Formulaire</td>
                <td>Nouveaux types d'entrée (email, date, etc.)</td>
                <td>Meilleure expérience utilisateur et validation intégrée</td>
              </tr>
              <tr>
                <td>WebSockets</td>
                <td>Connexion persistante entre le client et le serveur</td>
                <td>Communication en temps réel avec une latence réduite</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="page-section">
        <h2>Validation du HTML</h2>
        <p>
          La validation de votre HTML garantit qu'il respecte les normes appropriées et aide à prévenir les problèmes
          sur différents navigateurs. Voici quelques erreurs de validation courantes et comment les corriger :
        </p>
        
        <div className="bg-white p-5 rounded-lg border mt-6">
          <h3 className="text-xl font-semibold mb-3">Erreurs de Validation Courantes</h3>
          <ul className="space-y-3">
            <li className="p-3 bg-red-50 rounded">
              <strong className="text-red-700">Éléments Non Fermés:</strong> Assurez-vous toujours de fermer les éléments correctement ou d'utiliser la syntaxe d'auto-fermeture pour les éléments vides.
            </li>
            <li className="p-3 bg-red-50 rounded">
              <strong className="text-red-700">Imbrication Incorrecte:</strong> Les éléments doivent être correctement imbriqués. Par exemple, <code>&lt;p&gt;&lt;div&gt;&lt;/p&gt;&lt;/div&gt;</code> est incorrect.
            </li>
            <li className="p-3 bg-red-50 rounded">
              <strong className="text-red-700">IDs Dupliqués:</strong> Les attributs ID doivent être uniques dans le document.
            </li>
            <li className="p-3 bg-red-50 rounded">
              <strong className="text-red-700">Attributs Requis Manquants:</strong> Certains éléments nécessitent des attributs spécifiques (par exemple, <code>&lt;img&gt;</code> a besoin de <code>src</code> et <code>alt</code>).
            </li>
            <li className="p-3 bg-red-50 rounded">
              <strong className="text-red-700">Références de Caractères Invalides:</strong> Utilisez des références d'entités HTML appropriées pour les caractères spéciaux.
            </li>
          </ul>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2">Outils de Validation</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">W3C Markup Validation Service</a> - Validateur officiel</li>
              <li><a href="https://html5.validator.nu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nu Html Checker</a> - Validateur HTML5 moderne</li>
              <li>Extensions et plugins IDE (VS Code, WebStorm, etc.)</li>
              <li>Outils de construction comme ESLint avec des plugins HTML</li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="mt-8 flex justify-between">
        <Link to="/sheet2" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <ArrowLeft className="mr-2" size={18} />
          Retour aux indicateurs clés
        </Link>&nbsp;|&nbsp;
        <Link to="/sheet4" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          Voir les statistiques
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Sheet3Page;