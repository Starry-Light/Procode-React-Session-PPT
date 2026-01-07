function SetupTab() {
  return (
    <div>
      <section className="section">
        <h2 className="section-title">Prerequisites</h2>
        <p className="section-description">
          Before we can start building with React, we need a few things installed on our machine.
        </p>

        <div className="concept-card">
          <h3>1. Node.js</h3>
          <p>
            Node.js is a JavaScript runtime that lets us run JavaScript outside the browser.
            React's development tools are built with Node.js.
          </p>
          <pre className="code-block">
            <code>{`# Check if you have Node.js installed
node --version

# Should show something like: v18.x.x or higher`}</code>
          </pre>
          <p>
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" 
               style={{color: 'var(--accent)'}}>
              Download Node.js →
            </a>
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Creating a React Project with Vite</h2>
        <p className="section-description">
          Vite (French for "fast") is a modern build tool that makes React development blazingly fast.
        </p>

        <div className="concept-card info">
          <h3>Why Vite?</h3>
          <ul className="feature-list">
            <li>Lightning-fast Hot Module Replacement (HMR)</li>
            <li>Minimal configuration needed</li>
            <li>Built-in support for React, TypeScript, and more</li>
            <li>Optimized production builds</li>
          </ul>
        </div>

        <h3 style={{marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)'}}>
          Step-by-step:
        </h3>

        <pre className="code-block">
          <code>{`# 1. Create a new React project
npm create vite@latest my-react-app -- --template react

# 2. Navigate into the project
cd my-react-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev`}</code>
        </pre>

        <div className="callout tip">
          <span className="callout-icon">💡</span>
          <div>
            <strong>Tip:</strong> The dev server will start at <code className="inline-code">http://localhost:5173</code>. 
            Any changes you make to your code will instantly appear in the browser!
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Project Structure</h2>
        <p className="section-description">
          After running the commands above, you'll get a project structure like this:
        </p>

        <pre className="code-block">
          <code>{`my-react-app/
├── node_modules/      # Dependencies
├── public/            # Static files
├── src/
│   ├── App.jsx        # Main component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── package.json       # Project config
└── vite.config.js     # Vite config`}</code>
        </pre>
      </section>

      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">🎯 Key Takeaway</div>
          <p>
            <code className="inline-code">npm run dev</code> starts your development server. 
            This is the command you'll use most often while building your React app!
          </p>
        </div>
      </section>
    </div>
  )
}

export default SetupTab
