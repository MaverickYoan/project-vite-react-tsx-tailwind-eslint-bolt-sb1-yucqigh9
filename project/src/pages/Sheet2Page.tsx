import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sheet2Page = () => {
  return (
    <div>
      <h1>Key Metrics</h1>
      
      <section className="page-section">
        <h2>HTML Attributes</h2>
        <p className="mb-6">
          HTML attributes provide additional information about elements and affect their behavior.
          Here are some common attributes and their purposes:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Elements</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>id</td>
                <td>Any element</td>
                <td>Unique identifier for an element</td>
                <td><code>&lt;div id="header"&gt;</code></td>
              </tr>
              <tr>
                <td>class</td>
                <td>Any element</td>
                <td>Specifies CSS classes</td>
                <td><code>&lt;p class="highlight"&gt;</code></td>
              </tr>
              <tr>
                <td>href</td>
                <td>&lt;a&gt;, &lt;link&gt;</td>
                <td>Specifies URL for links</td>
                <td><code>&lt;a href="https://example.com"&gt;</code></td>
              </tr>
              <tr>
                <td>src</td>
                <td>&lt;img&gt;, &lt;script&gt;</td>
                <td>Specifies source path</td>
                <td><code>&lt;img src="image.jpg"&gt;</code></td>
              </tr>
              <tr>
                <td>alt</td>
                <td>&lt;img&gt;</td>
                <td>Alternative text for images</td>
                <td><code>&lt;img alt="Description"&gt;</code></td>
              </tr>
              <tr>
                <td>style</td>
                <td>Any element</td>
                <td>Inline CSS styles</td>
                <td><code>&lt;p style="color: blue;"&gt;</code></td>
              </tr>
              <tr>
                <td>lang</td>
                <td>&lt;html&gt;</td>
                <td>Specifies language</td>
                <td><code>&lt;html lang="en"&gt;</code></td>
              </tr>
              <tr>
                <td>title</td>
                <td>Any element</td>
                <td>Tooltip text</td>
                <td><code>&lt;abbr title="World Wide Web"&gt;</code></td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>Form inputs</td>
                <td>Hint text for input fields</td>
                <td><code>&lt;input placeholder="Enter name"&gt;</code></td>
              </tr>
              <tr>
                <td>required</td>
                <td>Form inputs</td>
                <td>Makes field required</td>
                <td><code>&lt;input required&gt;</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="page-section">
        <h2>HTML Forms</h2>
        <p>
          Forms are essential for collecting user input. Here's an overview of common form elements and their attributes:
        </p>
        
        <div className="bg-white p-6 border rounded-lg mt-6">
          <h3 className="text-xl font-semibold mb-4">Form Elements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Input Types</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>text</code> - Text input</li>
                <li><code>password</code> - Password field</li>
                <li><code>email</code> - Email input with validation</li>
                <li><code>number</code> - Numeric input</li>
                <li><code>checkbox</code> - Multiple selection</li>
                <li><code>radio</code> - Single selection from options</li>
                <li><code>file</code> - File upload</li>
                <li><code>date</code> - Date picker</li>
                <li><code>range</code> - Slider control</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Form Elements</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>&lt;form&gt;</code> - Container for form elements</li>
                <li><code>&lt;input&gt;</code> - Input field</li>
                <li><code>&lt;textarea&gt;</code> - Multi-line text input</li>
                <li><code>&lt;select&gt; &lt;option&gt;</code> - Dropdown list</li>
                <li><code>&lt;button&gt;</code> - Clickable button</li>
                <li><code>&lt;label&gt;</code> - Label for input elements</li>
                <li><code>&lt;fieldset&gt; &lt;legend&gt;</code> - Group related fields</li>
                <li><code>&lt;datalist&gt;</code> - Predefined options for inputs</li>
                <li><code>&lt;output&gt;</code> - Display calculation results</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2">Form Example</h4>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`<form action="/submit" method="post">
  <div>
    <label for="name">Name:</label>
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
    <label for="topic">Topic:</label>
    <select id="topic" name="topic">
      <option value="general">General Inquiry</option>
      <option value="support">Technical Support</option>
      <option value="feedback">Feedback</option>
    </select>
  </div>
  
  <div>
    <input type="checkbox" id="subscribe" name="subscribe" value="yes">
    <label for="subscribe">Subscribe to newsletter</label>
  </div>
  
  <button type="submit">Submit</button>
</form>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
      
      <div className="mt-8 flex justify-between">
        <Link to="/sheet1" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <ArrowLeft className="mr-2" size={18} />
          Back to Data Overview
        </Link>
        <Link to="/sheet3" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          View Analysis
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Sheet2Page;