import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sheet4Page = () => {
  return (
    <div>
      <h1>Statistics</h1>
      
      <section className="page-section">
        <h2>HTML Performance Optimization</h2>
        <p className="mb-6">
          Optimizing your HTML can significantly improve page load times and overall performance.
          Here are key statistics and optimization techniques:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg border text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">53%</div>
            <p className="text-gray-700">of users abandon sites that take longer than 3 seconds to load</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1.5s</div>
            <p className="text-gray-700">recommended page load time for optimal user experience</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">16%</div>
            <p className="text-gray-700">improvement in conversion rates with each second of improved load time</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Optimization Techniques</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h4 className="text-lg font-medium mb-2">Document Structure</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Minimize HTML size by removing unnecessary comments and whitespace</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Place CSS in the head and JavaScript at the end of body</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use async or defer attributes for non-critical scripts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Avoid inline styles and scripts when possible</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h4 className="text-lg font-medium mb-2">Media Optimization</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use responsive images with srcset and sizes attributes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Specify image dimensions to prevent layout shifts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use modern image formats (WebP, AVIF) with fallbacks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Implement lazy loading for below-the-fold images</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h4 className="text-lg font-medium mb-2">Resource Loading</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use preload for critical resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Implement resource hints (preconnect, prefetch, dns-prefetch)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Minimize HTTP requests by combining files when appropriate</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use HTTP/2 or HTTP/3 for multiplexed connections</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h4 className="text-lg font-medium mb-2">Advanced Techniques</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Implement critical CSS for above-the-fold content</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use service workers for offline capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Implement server-side rendering or static site generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Use content delivery networks (CDNs) for static assets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="page-section">
        <h2>HTML Usage Statistics</h2>
        <p>
          Understanding how HTML elements are used across the web can help inform your development decisions.
          Here are some statistics on HTML element usage:
        </p>
        
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Element</th>
                <th>Usage Percentage</th>
                <th>Common Use Cases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>&lt;div&gt;</code></td>
                <td>95%</td>
                <td>General container, layout structure</td>
              </tr>
              <tr>
                <td><code>&lt;a&gt;</code></td>
                <td>93%</td>
                <td>Links, navigation, actions</td>
              </tr>
              <tr>
                <td><code>&lt;img&gt;</code></td>
                <td>91%</td>
                <td>Images, logos, icons</td>
              </tr>
              <tr>
                <td><code>&lt;p&gt;</code></td>
                <td>89%</td>
                <td>Paragraphs, text content</td>
              </tr>
              <tr>
                <td><code>&lt;span&gt;</code></td>
                <td>85%</td>
                <td>Inline styling, text segments</td>
              </tr>
              <tr>
                <td><code>&lt;ul&gt;</code>/<code>&lt;li&gt;</code></td>
                <td>78%</td>
                <td>Lists, navigation menus</td>
              </tr>
              <tr>
                <td><code>&lt;header&gt;</code></td>
                <td>62%</td>
                <td>Page or section headers</td>
              </tr>
              <tr>
                <td><code>&lt;footer&gt;</code></td>
                <td>58%</td>
                <td>Page or section footers</td>
              </tr>
              <tr>
                <td><code>&lt;nav&gt;</code></td>
                <td>55%</td>
                <td>Navigation sections</td>
              </tr>
              <tr>
                <td><code>&lt;section&gt;</code></td>
                <td>52%</td>
                <td>Content sections</td>
              </tr>
              <tr>
                <td><code>&lt;article&gt;</code></td>
                <td>48%</td>
                <td>Self-contained content</td>
              </tr>
              <tr>
                <td><code>&lt;aside&gt;</code></td>
                <td>35%</td>
                <td>Sidebars, related content</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-gray-600 italic">
            * Statistics are approximate and based on analysis of top websites. Actual usage may vary.
          </p>
        </div>
      </section>
      
      <section className="page-section">
        <h2>Browser Compatibility</h2>
        <p>
          Different browsers may support HTML features differently. Here's a summary of HTML5 feature support across major browsers:
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
                  <td>Semantic Elements</td>
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
                  <td>Web Storage</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                </tr>
                <tr>
                  <td>Web Workers</td>
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
                  <td>Web Components</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-green-600">Full</td>
                  <td className="text-yellow-600">Partial</td>
                  <td className="text-green-600">Full</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-gray-600 italic">
            * Safari requires HTTPS for some features like Geolocation
          </p>
          
          <h4 className="text-lg font-medium mt-6 mb-2">Testing Tools</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Can I Use</a> - Browser compatibility tables</li>
            <li><a href="https://browserstack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BrowserStack</a> - Cross-browser testing platform</li>
            <li><a href="https://www.lambdatest.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LambdaTest</a> - Cross-browser testing cloud</li>
          </ul>
        </div>
      </section>
      
      <div className="mt-8">
        <Link to="/sheet3" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <ArrowLeft className="mr-2" size={18} />
          Back to Analysis
        </Link>
      </div>
    </div>
  );
};

export default Sheet4Page;