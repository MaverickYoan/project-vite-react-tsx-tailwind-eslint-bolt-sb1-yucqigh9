import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sheet1Page = () => {
  return (
    <div>
      <h1>Data Overview</h1>
      
      <section className="page-section">
        <h2>HTML Elements Overview</h2>
        <p className="mb-6">
          The HTML document structure consists of various elements that define the structure and content of web pages.
          Below is a comprehensive overview of key HTML elements and their usage.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Element</th>
                <th>Description</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>&lt;html&gt;</code></td>
                <td>Root element of an HTML page</td>
                <td>Contains all other HTML elements</td>
              </tr>
              <tr>
                <td><code>&lt;head&gt;</code></td>
                <td>Contains meta information</td>
                <td>Title, styles, scripts, meta tags</td>
              </tr>
              <tr>
                <td><code>&lt;title&gt;</code></td>
                <td>Page title</td>
                <td>Appears in browser tab</td>
              </tr>
              <tr>
                <td><code>&lt;body&gt;</code></td>
                <td>Document body</td>
                <td>Contains all visible content</td>
              </tr>
              <tr>
                <td><code>&lt;h1&gt; to &lt;h6&gt;</code></td>
                <td>Headings</td>
                <td>Section titles (h1 most important, h6 least)</td>
              </tr>
              <tr>
                <td><code>&lt;p&gt;</code></td>
                <td>Paragraph</td>
                <td>Text blocks</td>
              </tr>
              <tr>
                <td><code>&lt;a&gt;</code></td>
                <td>Anchor/link</td>
                <td>Hyperlinks to other pages</td>
              </tr>
              <tr>
                <td><code>&lt;img&gt;</code></td>
                <td>Image</td>
                <td>Embed images</td>
              </tr>
              <tr>
                <td><code>&lt;div&gt;</code></td>
                <td>Division</td>
                <td>Container for flow content</td>
              </tr>
              <tr>
                <td><code>&lt;span&gt;</code></td>
                <td>Inline container</td>
                <td>Styling portions of text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="page-section">
        <h2>HTML Document Structure</h2>
        <p>A basic HTML document follows this structure:</p>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">
            <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Website Heading</h1>
    <nav>
      <!-- Navigation links -->
    </nav>
  </header>
  
  <main>
    <section>
      <h2>Section Title</h2>
      <p>Content goes here...</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>
  
  <script src="script.js"></script>
</body>
</html>`}</code>
          </pre>
        </div>
        
        <p>
          This structure provides a foundation for creating well-organized, semantic HTML documents
          that are accessible and SEO-friendly.
        </p>
      </section>
      
      <section className="page-section">
        <h2>Semantic Elements</h2>
        <p>
          HTML5 introduced semantic elements that clearly describe their meaning to both the browser and the developer.
          Using semantic elements improves accessibility, SEO, and code readability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 border rounded shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Structural Elements</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><code>&lt;header&gt;</code> - Page or section header</li>
              <li><code>&lt;nav&gt;</code> - Navigation links</li>
              <li><code>&lt;main&gt;</code> - Main content area</li>
              <li><code>&lt;section&gt;</code> - Standalone section</li>
              <li><code>&lt;article&gt;</code> - Independent content</li>
              <li><code>&lt;aside&gt;</code> - Related content</li>
              <li><code>&lt;footer&gt;</code> - Page or section footer</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 border rounded shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Text Elements</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><code>&lt;figure&gt; &lt;figcaption&gt;</code> - Images with captions</li>
              <li><code>&lt;time&gt;</code> - Time/dates</li>
              <li><code>&lt;mark&gt;</code> - Highlighted text</li>
              <li><code>&lt;details&gt; &lt;summary&gt;</code> - Expandable details</li>
              <li><code>&lt;em&gt;</code> - Emphasized text</li>
              <li><code>&lt;strong&gt;</code> - Important text</li>
              <li><code>&lt;cite&gt;</code> - Citation reference</li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="mt-8 flex justify-end">
        <Link to="/sheet2" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          View Key Metrics
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Sheet1Page;