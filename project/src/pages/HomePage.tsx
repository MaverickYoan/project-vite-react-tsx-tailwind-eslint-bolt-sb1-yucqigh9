import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <section className="py-12 mb-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Site Web de données Excel</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Un site Web complet présentant toutes les informations de votre feuille de calcul Excel.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/sheet1" className="btn bg-white text-blue-700 hover:bg-gray-100">
              Explorer les données
            </Link>
            <a href="#overview" className="btn bg-blue-600 text-white border border-white hover:bg-blue-700">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <section id="overview" className="page-section">
        <h2>Bienvenue sur le site Web d'Excel Data</h2>
        <p>
          Ce site Web présente toutes les informations contenues dans votre fichier Excel dans un format organisé et facile à naviguer.
          Nous avons converti vos données de feuille de calcul en un site Web entièrement fonctionnel avec plusieurs pages.
        </p>
        <p>
          Naviguez à travers les différentes sections en utilisant le menu ci-dessus pour explorer toutes les
          données qui étaient à l'origine dans votre fichier Excel.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        <Link to="/sheet1" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Aperçu des données</h3>
          <p className="text-gray-600">
            Consultez l’aperçu principal des données avec les informations clés de votre feuille de calcul.
          </p>
        </Link>
        
        <Link to="/sheet2" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Indicateurs clés</h3>
          <p className="text-gray-600">
            Explorez les indicateurs et chiffres importants de la deuxième feuille de votre fichier Excel.
          </p>
        </Link>
        
        <Link to="/sheet3" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Analyseur</h3>
          <p className="text-gray-600">
            Plongez dans l’analyse détaillée contenue dans la troisième feuille de vos données.
          </p>
        </Link>
        
        <Link to="/sheet4" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Statistiques</h3>
          <p className="text-gray-600">
            Consultez les données statistiques et les informations supplémentaires de votre fichier Excel.
          </p>
        </Link>
      </section>

      <section className="page-section">
        <h2>À propos de ce projet</h2>
        <p>
          Ce site web a été créé pour présenter vos données Excel dans un format plus accessible et convivial. Au lieu de naviguer dans les onglets d'une feuille de calcul, vous pouvez désormais parcourir des pages web bien organisées qui affichent les mêmes informations avec une lisibilité et une navigation améliorées.
        </p>
        <p>
          Toutes les données sont fidèlement représentées à partir de votre fichier Excel d'origine, avec les avantages supplémentaires d'une conception réactive qui fonctionne bien sur tous les appareils, des téléphones mobiles aux ordinateurs de bureau.
        </p>
      </section>
    </div>
  );
};

export default HomePage;