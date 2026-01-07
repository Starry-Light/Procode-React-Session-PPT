import CodePlayground from '../components/CodePlayground'

function WhyReactTab() {
  const vanillaJsExample = {
    '/index.html': `<!DOCTYPE html>
<html>
<head>
  <title>Counter - Vanilla JS</title>
  <style>
    body { 
      font-family: system-ui; 
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
    }
    h1 { color: #333; }
    button {
      padding: 12px 24px;
      font-size: 18px;
      cursor: pointer;
      margin: 8px;
    }
    #count {
      font-size: 48px;
      font-weight: bold;
      color: #228be6;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <h1>Vanilla JS Counter</h1>
  <div id="count">0</div>
  <div>
    <button onclick="decrement()">-</button>
    <button onclick="increment()">+</button>
  </div>
  
  <script>
    let count = 0;
    
    function updateDisplay() {
      document.getElementById('count').textContent = count;
    }
    
    function increment() {
      count++;
      updateDisplay();
    }
    
    function decrement() {
      count--;
      updateDisplay();
    }
  </script>
</body>
</html>`,
  }

  const reactExample = {
    '/App.js': `import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      fontFamily: 'system-ui',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 40
    }}>
      <h1>React Counter</h1>
      <div style={{ 
        fontSize: 48, 
        fontWeight: 'bold', 
        color: '#228be6',
        margin: '20px 0'
      }}>
        {count}
      </div>
      <div>
        <button 
          onClick={() => setCount(count - 1)}
          style={{ padding: '12px 24px', fontSize: 18, margin: 8 }}
        >
          -
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '12px 24px', fontSize: 18, margin: 8 }}
        >
          +
        </button>
      </div>
    </div>
  );
}`,
  }

  return (
    <div>
      <section className="section">
        <h2 className="section-title">SPAs vs Multi-Page Apps</h2>
        <p className="section-description">
          Traditional websites reload the entire page when you navigate. 
          <strong> Single Page Applications (SPAs)</strong> load once and update dynamically.
        </p>

        <div className="comparison-grid">
          <div className="comparison-item">
            <span className="comparison-label">Multi-Page App (Traditional)</span>
            <ul className="feature-list">
              <li>Every click = full page reload</li>
              <li>Server renders each page</li>
              <li>Each page is a separate HTML file</li>
              <li>Slower transitions between pages</li>
            </ul>
          </div>
          <div className="comparison-item good">
            <span className="comparison-label good">Single Page App (React)</span>
            <ul className="feature-list">
              <li>Load once, update in place</li>
              <li>Client renders the UI</li>
              <li>One HTML file, dynamic content</li>
              <li>Instant, smooth transitions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">The Pain of Manual DOM Manipulation</h2>
        <p className="section-description">
          In vanilla JavaScript, we have to manually find elements and update them. 
          This becomes messy and error-prone as our app grows.
        </p>

        <CodePlayground 
          files={vanillaJsExample} 
          template="static"
          title="Vanilla JavaScript - Imperative Approach"
        />

        <div className="callout warning">
          <span className="callout-icon">⚠️</span>
          <div>
            <strong>Notice the pattern:</strong> We manually call <code className="inline-code">document.getElementById()</code> 
            and then <code className="inline-code">.textContent = ...</code> every time something changes. 
            Imagine doing this for 100 different pieces of UI!
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">React's Declarative Approach</h2>
        <p className="section-description">
          With React, we simply describe WHAT the UI should look like. 
          React figures out HOW to update the DOM.
        </p>

        <CodePlayground 
          files={reactExample} 
          title="React - Declarative Approach"
        />

        <div className="callout tip">
          <span className="callout-icon">✨</span>
          <div>
            <strong>Key insight:</strong> We just say <code className="inline-code">{'{count}'}</code> in our JSX. 
            When <code className="inline-code">count</code> changes, React automatically updates the display. 
            No manual DOM manipulation needed!
          </div>
        </div>
      </section>

      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">🎯 Imperative vs Declarative</div>
          <p>
            <strong>Imperative (Vanilla JS):</strong> "Find the element with id 'count', 
            then set its text content to the new value."
          </p>
          <p style={{marginTop: '8px'}}>
            <strong>Declarative (React):</strong> "The count should be displayed here." 
            React handles the rest.
          </p>
        </div>
      </section>
    </div>
  )
}

export default WhyReactTab
