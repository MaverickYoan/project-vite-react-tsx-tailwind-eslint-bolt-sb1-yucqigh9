import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sheet2Page = () => {
  return (
    <div>
      <h1>clés métriques</h1>
      
      <section className="page-section">
        <h2>Attributs HTML</h2>
        <p className="mb-6">
          Les attributs HTML fournissent des informations supplémentaires sur les éléments et influencent leur comportement. Voici quelques attributs courants et leurs fonctions :
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Attributs</th>
                <th>Éléments</th>
                <th>Fonction</th>
                <th>Exemple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>id</td>
                <td>Tous les éléments</td>
                <td>Identifiant unique pour un élément</td>
                <td><code>&lt;div id="header"&gt;</code></td>
              </tr>
              <tr>
                <td>class</td>
                <td>Tous les éléments</td>
                <td>Spécifie les classes CSS</td>
                <td><code>&lt;p class="highlight"&gt;</code></td>
              </tr>
              <tr>
                <td>href</td>
                <td>&lt;a&gt;, &lt;link&gt;</td>
                <td>Spécifie l'URL pour les liens</td>
                <td><code>&lt;a href="https://example.com"&gt;</code></td>
              </tr>
              <tr>
                <td>src</td>
                <td>&lt;img&gt;, &lt;script&gt;</td>
                <td>Spécifier les chemins sources</td>
                <td><code>&lt;img src="image.jpg"&gt;</code></td>
              </tr>
              <tr>
                <td>alt</td>
                <td>&lt;img&gt;</td>
                <td>Texte alternatif pour les images</td>
                <td><code>&lt;img alt="Description"&gt;</code></td>
              </tr>
              <tr>
                <td>style</td>
                <td>Tous les éléments</td>
                <td>	Styles CSS en ligne</td>
                <td><code>&lt;p style="color: blue;"&gt;</code></td>
              </tr>
              <tr>
                <td>lang</td>
                <td>&lt;html&gt;</td>
                <td>Spécifie la langue</td>
                <td><code>&lt;html lang="en"&gt;</code></td>
              </tr>
              <tr>
                <td>title</td>
                <td>Tous les éléments</td>
                <td>Texte d'info-bulle</td>
                <td><code>&lt;abbr title="World Wide Web"&gt;</code></td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>Champs de formulaire</td>
                <td>Texte d'indice pour les champs de saisie</td>
                <td><code>&lt;input placeholder="Enter name"&gt;</code></td>
              </tr>
              <tr>
                <td>required</td>
                <td>Champs de formulaire</td>
                <td>Rendre le champ requis</td>
                <td><code>&lt;input required&gt;</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="page-section">
        <h2>Formulaires HTML</h2>
        <p>
          Les formulaires sont essentiels pour collecter les entrées des utilisateurs. Voici un aperçu des éléments de formulaire courants et de leurs attributs :
        </p>
        
        <div className="bg-white p-6 border rounded-lg mt-6">
          <h3 className="text-xl font-semibold mb-4">Éléments de formulaire</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Types d'entrée</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>text</code> - Champ de texte</li>
                <li><code>password</code> - Champ de mot de passe</li>
                <li><code>email</code> - Champ d'email avec validation</li>
                <li><code>number</code> - Champ numérique</li>
                <li><code>checkbox</code> - Sélection multiple</li>
                <li><code>radio</code> - Sélection unique parmi les options</li>
                <li><code>file</code> - Téléversement de fichiers</li>
                <li><code>date</code> - Sélecteur de date</li>
                <li><code>range</code> - Contrôle de plage</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Éléments de formulaire</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>&lt;form&gt;</code> - Conteneur pour les éléments de formulaire</li>
                <li><code>&lt;input&gt;</code> - Champ de saisie</li>
                <li><code>&lt;textarea&gt;</code> - Champ de saisie multi-lignes</li>
                <li><code>&lt;select&gt; &lt;option&gt;</code> - Liste déroulante</li>
                <li><code>&lt;button&gt;</code> - Bouton cliquable</li>
                <li><code>&lt;label&gt;</code> - Étiquette pour les éléments de saisie</li>
                <li><code>&lt;fieldset&gt; &lt;legend&gt;</code> - Regrouper des champs connexes</li>
                <li><code>&lt;datalist&gt;</code> - Options prédéfinies pour les saisies</li>
                <li><code>&lt;output&gt;</code> - Afficher les résultats de calcul</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2">Exemple de Formulaire</h4>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`<form action="/submit" method="post">
  <div>
    <label for="name">Nom:</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
  </div>
  
  <div>
    <label for="topic">Sujet:</label>
    <select id="topic" name="topic">
      <option value="general">Demande générale</option>
      <option value="support">Support technique</option>
      <option value="feedback">Retour d'information</option>
    </select>
  </div>
  
  <div>
    <input type="checkbox" id="subscribe" name="subscribe" value="yes">
    <label for="subscribe">S'abonner à la newsletter</label>
  </div>

  <button type="submit">Soumettre</button>
</form>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
      
      <div className="mt-8 flex justify-between">
        <Link to="/sheet1" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <ArrowLeft className="mr-2" size={18} />
          Retour à la vue d'ensemble des données
        </Link>&nbsp;|&nbsp;
        <Link to="/sheet3" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          Voir l'analyse
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Sheet2Page;