import CodePlayground from '../components/CodePlayground'

function JSXComponentsTab() {
  const jsxBasicsExample = {
    '/App.js': `export default function App() {
  const name = "React Learner";
  const currentYear = new Date().getFullYear();
  
  return (
    <div>
      <h1>Hello, {name}! 👋</h1>
      <p>Welcome to our session.</p>
      <p>The year is: {currentYear}</p>
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}`,
  }

  const componentTreeExample = {
    '/App.js': `// Each function is a Component!
function Header() {
  return (
    <header>
      <h1>My App</h1>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h2>Welcome!</h2>
      <p>This is the main content area.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 My App</p>
    </footer>
  );
}

// The App combines all components
export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}`,
  }

  const customTagsExample = {
    '/App.js': `// Think of components as YOUR OWN HTML tags!

function Button({ color }) {
  return (
    <button style={{
      background: color,
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      margin: 4
    }}>
      Click me!
    </button>
  );
}

function Card({ title }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      maxWidth: 200
    }}>
      <h3>{title}</h3>
      <p>This is a reusable card.</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1>Custom "HTML Tags"</h1>
      
      {/* Using our Button component like an HTML tag */}
      <div>
        <Button color="#228be6" />
        <Button color="#40c057" />
        <Button color="#fa5252" />
      </div>
      
      {/* Using our Card component */}
      <div style={{ display: 'flex', marginTop: 20 }}>
        <Card title="Card One" />
        <Card title="Card Two" />
      </div>
    </div>
  );
}`,
  }

  return (
    <div>
      <section className="section">
        <h2 className="section-title">What is JSX?</h2>
        <p className="section-description">
          JSX stands for JavaScript XML. It lets us write HTML-like code directly inside JavaScript.
          This might look weird at first, but it's incredibly powerful!
        </p>

        <div className="concept-card info">
          <h3>The Key Insight</h3>
          <p>
            JSX is NOT HTML. It's JavaScript that looks like HTML. 
            Under the hood, it gets transformed into regular JavaScript function calls.
          </p>
        </div>

        <CodePlayground 
          files={jsxBasicsExample} 
          title="JSX Basics - Embedding JavaScript with {}"
        />

        <div className="callout tip">
          <span className="callout-icon">💡</span>
          <div>
            <strong>The curly braces <code className="inline-code">{'{}'}</code></strong> are your "escape hatch" 
            from HTML back to JavaScript. Anything inside curly braces is evaluated as JavaScript!
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Components &amp; The Component Tree</h2>
        <p className="section-description">
          A <strong>component</strong> is a function that returns JSX. 
          Components can use other components, forming a tree structure.
        </p>

        <CodePlayground 
          files={componentTreeExample} 
          title="Building a Component Tree"
        />

        <div className="concept-card">
          <h3>Component Rules</h3>
          <ul className="feature-list">
            <li>Component names must start with a Capital Letter</li>
            <li>Components must return JSX (or null)</li>
            <li>Components can be reused as many times as you want</li>
            <li>Keep components small and focused on one thing</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Components as "Custom HTML Tags"</h2>
        <p className="section-description">
          Think of components as creating your own HTML vocabulary. 
          Instead of just <code className="inline-code">&lt;div&gt;</code> and <code className="inline-code">&lt;button&gt;</code>, 
          you can have <code className="inline-code">&lt;Header&gt;</code>, <code className="inline-code">&lt;UserProfile&gt;</code>, 
          or <code className="inline-code">&lt;ShoppingCart&gt;</code>!
        </p>

        <CodePlayground 
          files={customTagsExample} 
          title="Components = Custom HTML Tags"
        />
      </section>

      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">🎯 Key Takeaway</div>
          <p>
            Components are the building blocks of React apps. 
            They're just functions that return JSX, and you can compose them together like LEGO bricks. 
            Use <code className="inline-code">{'{}'}</code> to embed any JavaScript expression in your JSX.
          </p>
        </div>
      </section>
    </div>
  )
}

export default JSXComponentsTab
