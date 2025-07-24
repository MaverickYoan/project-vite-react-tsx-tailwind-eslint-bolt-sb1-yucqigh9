import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sheet3Page = () => {
  return (
    <div>
      <h1>Analysis</h1>
      
      <section className="page-section">
        <h2>HTML Best Practices</h2>
        <p className="mb-6">
          Following best practices when writing HTML ensures your web pages are accessible, 
          SEO-friendly, and maintainable. Here are key guidelines to follow:
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Document Structure</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Always declare DOCTYPE and use HTML5 (<code>&lt;!DOCTYPE html&gt;</code>)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Set the language attribute (<code>&lt;html lang="en"&gt;</code>)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Include proper meta tags (charset, viewport)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use semantic elements for page structure</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Don't use deprecated elements like <code>&lt;center&gt;</code> or <code>&lt;font&gt;</code></span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Accessibility</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use alternative text for images (<code>alt</code> attributes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Ensure proper heading hierarchy (h1 → h2 → h3)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Associate labels with form controls</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use ARIA attributes when necessary</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Don't rely solely on color to convey information</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">SEO</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use descriptive, unique page titles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Include meta description tags</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Structure content with semantic headings</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use descriptive link text (not "click here")</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Don't hide important content with JavaScript</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Code Quality</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use consistent indentation and formatting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Close all tags properly</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use lowercase for element names and attributes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Quote attribute values consistently</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Don't mix content and presentation (use CSS for styling)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="page-section">
        <h2>HTML5 Features</h2>
        <p>
          HTML5 introduced many new features that enhance web development capabilities.
          Here are some key features and their benefits:
        </p>
        
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
                <th>Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Semantic Elements</td>
                <td>New elements like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code></td>
                <td>Improved structure, accessibility, and SEO</td>
              </tr>
              <tr>
                <td>Audio and Video</td>
                <td>Native <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements</td>
                <td>No need for third-party plugins like Flash</td>
              </tr>
              <tr>
                <td>Canvas</td>
                <td>2D drawing API</td>
                <td>Dynamic, scriptable rendering of graphics</td>
              </tr>
              <tr>
                <td>SVG</td>
                <td>Scalable Vector Graphics</td>
                <td>Resolution-independent graphics that scale perfectly</td>
              </tr>
              <tr>
                <td>Web Storage</td>
                <td>localStorage and sessionStorage</td>
                <td>Client-side data storage beyond cookies</td>
              </tr>
              <tr>
                <td>Geolocation</td>
                <td>Geolocation API</td>
                <td>Access to geographical position information</td>
              </tr>
              <tr>
                <td>Web Workers</td>
                <td>Background processing</td>
                <td>Run scripts in background threads</td>
              </tr>
              <tr>
                <td>Drag and Drop</td>
                <td>Native drag-and-drop functionality</td>
                <td>Improved user interactions without JavaScript</td>
              </tr>
              <tr>
                <td>New Form Controls</td>
                <td>New input types (email, date, etc.)</td>
                <td>Better user experience and built-in validation</td>
              </tr>
              <tr>
                <td>WebSockets</td>
                <td>Persistent connection between client and server</td>
                <td>Real-time communication with reduced latency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="page-section">
        <h2>HTML Validation</h2>
        <p>
          Validating your HTML ensures it follows the proper standards and helps prevent issues 
          across different browsers. Here are some common validation errors and how to fix them:
        </p>
        
        <div className="bg-white p-5 rounded-lg border mt-6">
          <h3 className="text-xl font-semibold mb-3">Common Validation Errors</h3>
          <ul className="space-y-3">
            <li className="p-3 bg-red-50 rounded">
              <strong className="text-red-700">Unclosed Elements:</strong> Always make sure to close elements properly or use self-closing syntax for void elements.
            </li>
            <li className="p-3 bg-red-50 rounded">
              <strong className="text-red-700">Improper Nesting:</strong> Elements must be properly nested. For example, <code>&lt;p&gt;&lt;div&gt;&lt;/p&gt;&lt;/div&gt;</code> is incorrect.
            </li>
            <li className="p-3 bg-red-50 rounded">
              <strong className="text-red-700">Duplicate IDs:</strong> ID attributes must be unique within the document.
            </li>
            <li className="p-3 bg-red-50 rounded">
              <strong className="text-red-700">Missing Required Attributes:</strong> Some elements require specific attributes (e.g., <code>&lt;img&gt;</code> needs <code>src</code> and <code>alt</code>).
            </li>
            <li className="p-3 bg-red-50 rounded">
              <strong className="text-red-700">Invalid Character References:</strong> Use proper HTML entity references for special characters.
            </li>
          </ul>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2">Validation Tools</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">W3C Markup Validation Service</a> - Official validator</li>
              <li><a href="https://html5.validator.nu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nu Html Checker</a> - Modern HTML5 validator</li>
              <li>IDE extensions and plugins (VS Code, WebStorm, etc.)</li>
              <li>Build tools like ESLint with HTML plugins</li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="mt-8 flex justify-between">
        <Link to="/sheet2" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <ArrowLeft className="mr-2" size={18} />
          Back to Key Metrics
        </Link>
        <Link to="/sheet4" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          View Statistics
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Sheet3Page;