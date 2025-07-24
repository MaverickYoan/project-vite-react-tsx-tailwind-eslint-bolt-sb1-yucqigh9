import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sheet4Page = () => {
  return (
    <div>
      <h1>Statistiques</h1>
      
      <section className="page-section">
        <h2>Optimisation des Performances HTML</h2>
        <p className="mb-6">
          L'optimisation de votre HTML peut améliorer considérablement les temps de chargement des pages et les performances globales.
          Voici quelques statistiques clés et techniques d'optimisation :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg border text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">53%</div>
            <p className="text-gray-700">des utilisateurs partent du site si il y a plus de 3 secondes de chargement.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1.5s</div>
            <p className="text-gray-700">temps de chargement recommandé pour une expérience utilisateur optimale</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">16%</div>
            <p className="text-gray-700">amélioration des taux de conversion avec chaque seconde de temps de chargement amélioré</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Techniques d'Optimisation</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h4 className="text-lg font-medium mb-2">Structure du Document</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Minimiser la taille du HTML en supprimant les commentaires et les espaces inutiles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Placer le CSS dans le head et le JavaScript à la fin du body</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser les attributs async ou defer pour les scripts non critiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Éviter les styles et scripts en ligne lorsque cela est possible</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h4 className="text-lg font-medium mb-2">Optimisation des Médias</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser des images responsives avec les attributs srcset et sizes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Spécifier les dimensions des images pour éviter les décalages de mise en page</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser des formats d'image modernes (WebP, AVIF) avec des fallbacks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Implémenter le lazy loading pour les images en dessous de la ligne de flottaison</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h4 className="text-lg font-medium mb-2">Chargement des ressources</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser preload pour les ressources critiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Implémenter des hints de ressources (preconnect, prefetch, dns-prefetch)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Minimiser les requêtes HTTP en combinant les fichiers lorsque cela est approprié</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser HTTP/2 ou HTTP/3 pour les connexions multiplexées</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h4 className="text-lg font-medium mb-2">Techniques Avancées</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Implémenter le CSS critique pour le contenu au-dessus de la ligne de flottaison</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser des workers de service pour les capacités hors ligne</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Implémenter le rendu côté serveur ou la génération de sites statiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Utiliser des réseaux de diffusion de contenu (CDN) pour les ressources statiques</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="page-section">
        <h2>Utilisation des statistiques HTML</h2>
        <p>
          Comprendre comment les éléments HTML sont utilisés sur le web peut aider à éclairer vos décisions de développement.
          Voici quelques statistiques sur l'utilisation des éléments HTML :
        </p>
        
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Élément</th>
                <th>Pourcentage d'utilisation</th>
                <th>Cas d'utilisation courants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>&lt;div&gt;</code></td>
                <td>95%</td>
                <td>Conteneur général, structure de mise en page</td>
              </tr>
              <tr>
                <td><code>&lt;a&gt;</code></td>
                <td>93%</td>
                <td>Liens, navigation, actions</td>
              </tr>
              <tr>
                <td><code>&lt;img&gt;</code></td>
                <td>91%</td>
                <td>Images, logos, icônes</td>
              </tr>
              <tr>
                <td><code>&lt;p&gt;</code></td>
                <td>89%</td>
                <td>Paragraphes, contenu textuel</td>
              </tr>
              <tr>
                <td><code>&lt;span&gt;</code></td>
                <td>85%</td>
                <td>Style en ligne, segments de texte</td>
              </tr>
              <tr>
                <td><code>&lt;ul&gt;</code>/<code>&lt;li&gt;</code></td>
                <td>78%</td>
                <td>Listes, menus de navigation</td>
              </tr>
              <tr>
                <td><code>&lt;header&gt;</code></td>
                <td>62%</td>
                <td>En-têtes de page ou de section</td>
              </tr>
              <tr>
                <td><code>&lt;footer&gt;</code></td>
                <td>58%</td>
                <td>Pieds de page ou de section</td>
              </tr>
              <tr>
                <td><code>&lt;nav&gt;</code></td>
                <td>55%</td>
                <td>Sections de navigation</td>
              </tr>
              <tr>
                <td><code>&lt;section&gt;</code></td>
                <td>52%</td>
                <td>Sections de contenu</td>
              </tr>
              <tr>
                <td><code>&lt;article&gt;</code></td>
                <td>48%</td>
                <td>Contenu autonome</td>
              </tr>
              <tr>
                <td><code>&lt;aside&gt;</code></td>
                <td>35%</td>
                <td>Barres latérales, contenu connexe</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-gray-600 italic">
            * Les statistiques sont approximatives et basées sur l'analyse des principaux sites web. L'utilisation réelle peut varier.
          </p>
        </div>
      </section>
      
      <section className="page-section">
        <h2>Compatibilité des navigateurs</h2>
        <p>
          Différents navigateurs peuvent prendre en charge les fonctionnalités HTML de manière différente. Voici un résumé de la prise en charge des fonctionnalités HTML5 dans les principaux navigateurs :
        </p>
        
        <div className="mt-6 bg-white p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">HTML5 Feature Support</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Chrome</th>
                  <th>Firefox</th>
                  <th>Safari</th>
                  <th>Edge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Elements Sémantiques</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                </tr>
                <tr>
                  <td>Audio/Video</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                </tr>
                <tr>
                  <td>Canvas</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                </tr>
                <tr>
                  <td>SVG</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                </tr>
                <tr>
                  <td>Stockage sur le Web</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                </tr>
                <tr>
                  <td>Travailleurs du Web</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                </tr>
                <tr>
                  <td>Geolocation</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-yellow-600">Partial*</td>
                  <td className="text-green-600">Full</td>
                </tr>
                <tr>
                  <td>WebRTC</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-yellow-600">Partial</td>
                  <td className="text-green-600">Full</td>
                </tr>
                <tr>
                  <td>WebGL</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                </tr>
                <tr>
                  <td>Composants Web</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-yellow-600">Partial</td>
                  <td className="text-green-600">Full</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-gray-600 italic">
            * Safari nécessite HTTPS pour certaines fonctionnalités comme la géolocalisation
          </p>

          <h4 className="text-lg font-medium mt-6 mb-2">Outils de test</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Can I Use</a> - Tables de compatibilité des navigateurs</li>
            <li><a href="https://browserstack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BrowserStack</a> - Plateforme de test cross-browser</li>
            <li><a href="https://www.lambdatest.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LambdaTest</a> - Cloud de test cross-browser</li>
          </ul>
        </div>
      </section>
      
      <div className="mt-8">
        <Link to="/sheet3" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <ArrowLeft className="mr-2" size={18} />
          Retour à l'analyse
        </Link> &nbsp;|&nbsp;
        <Link to="/sheet5" className="flex items-center text-blue-600 hover:text-blue-800 font-medium ml-4">
          Première page de tests
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Sheet4Page;