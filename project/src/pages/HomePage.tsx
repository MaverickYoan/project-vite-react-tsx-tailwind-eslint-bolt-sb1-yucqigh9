import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <section className="py-12 mb-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Excel Data Website</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A comprehensive website showcasing all the information from your Excel spreadsheet.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/sheet1" className="btn bg-white text-blue-700 hover:bg-gray-100">
              Explore Data
            </Link>
            <a href="#overview" className="btn bg-blue-600 text-white border border-white hover:bg-blue-700">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="overview" className="page-section">
        <h2>Welcome to the Excel Data Website</h2>
        <p>
          This website presents all the information contained in your Excel file in an organized, 
          easy-to-navigate format. We've converted your spreadsheet data into a fully functional 
          website with multiple pages.
        </p>
        <p>
          Navigate through the different sections using the menu above to explore all the 
          data that was originally in your Excel file.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        <Link to="/sheet1" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Data Overview</h3>
          <p className="text-gray-600">
            View the main data overview with key information from your spreadsheet.
          </p>
        </Link>
        
        <Link to="/sheet2" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Key Metrics</h3>
          <p className="text-gray-600">
            Explore important metrics and figures from the second sheet of your Excel file.
          </p>
        </Link>
        
        <Link to="/sheet3" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Analysis</h3>
          <p className="text-gray-600">
            Dive into the detailed analysis contained in the third sheet of your data.
          </p>
        </Link>
        
        <Link to="/sheet4" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Statistics</h3>
          <p className="text-gray-600">
            Review statistical data and additional information from your Excel file.
          </p>
        </Link>
      </section>

      <section className="page-section">
        <h2>About This Project</h2>
        <p>
          This website was created to present your Excel data in a more accessible, user-friendly format.
          Instead of navigating through spreadsheet tabs, you can now browse through well-organized web pages
          that display the same information with improved readability and navigation.
        </p>
        <p>
          All data is faithfully represented from your original Excel file, with added benefits of
          responsive design that works well on all devices, from mobile phones to desktop computers.
        </p>
      </section>
    </div>
  );
};

export default HomePage;