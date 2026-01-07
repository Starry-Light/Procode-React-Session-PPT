import CodePlayground from '../components/CodePlayground'

function PropsTab() {
  const basicPropsExample = {
    '/App.js': `// Props are like function arguments!

function Greeting({ name, age }) {
  return (
    <div style={{ 
      padding: 16, 
      margin: 8, 
      background: '#f8f9fa',
      borderRadius: 8 
    }}>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1>Props Demo</h1>
      
      {/* Passing different props to the same component */}
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
      <Greeting name="Charlie" age={22} />
    </div>
  );
}`,
  }

  const functionAnalogyExample = {
    '/App.js': `// Think of it like regular functions!

// Regular JS function
function greetPerson(name, age) {
  return "Hello " + name + ", you are " + age;
}

// React component (also a function!)
function GreetingCard({ name, age }) {
  return (
    <div style={{ 
      padding: 16, 
      background: '#e7f5ff',
      borderRadius: 8,
      marginBottom: 12
    }}>
      Hello {name}, you are {age}!
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h2>Function Call:</h2>
      <code style={{ background: '#f1f3f4', padding: 8 }}>
        {greetPerson("Alice", 25)}
      </code>
      
      <h2 style={{ marginTop: 20 }}>Component with Props:</h2>
      <GreetingCard name="Alice" age={25} />
      
      <p style={{ color: '#666', marginTop: 20 }}>
        ☝️ Same concept! Just different syntax.
      </p>
    </div>
  );
}`,
  }

  const childrenExample = {
    '/App.js': `// The 'children' prop: Composition in action!

function Card({ title, children }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 16,
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        background: '#228be6', 
        color: 'white',
        padding: 12 
      }}>
        <strong>{title}</strong>
      </div>
      <div style={{ padding: 16 }}>
        {/* children = whatever you put BETWEEN <Card> and </Card> */}
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1>The children Prop</h1>
      
      <Card title="Welcome Message">
        <p>This paragraph is the children!</p>
        <p>You can put anything here.</p>
      </Card>
      
      <Card title="User Info">
        <ul>
          <li>Name: Alice</li>
          <li>Role: Developer</li>
        </ul>
        <button>Edit Profile</button>
      </Card>
      
      <Card title="Simple Text">
        Just a string works too!
      </Card>
    </div>
  );
}`,
  }

  return (
    <div>
      <section className="section">
        <h2 className="section-title">What are Props?</h2>
        <p className="section-description">
          Props (short for "properties") are how we pass data from a parent component to a child component. 
          They make components reusable and dynamic.
        </p>

        <CodePlayground 
          files={basicPropsExample} 
          title="Passing Props to Components"
        />

        <div className="callout tip">
          <span className="callout-icon">💡</span>
          <div>
            Notice how we use the same <code className="inline-code">Greeting</code> component 
            three times with different data. That's the power of props!
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Props = Function Arguments</h2>
        <p className="section-description">
          If you understand function arguments, you already understand props! 
          They're the same concept in a different form.
        </p>

        <div className="comparison-grid">
          <div className="comparison-item">
            <span className="comparison-label">Regular Function</span>
            <div className="code-block">
              <code>
                greet(name, age){'\n'}
                greet("Alice", 25)
              </code>
            </div>
          </div>
          <div className="comparison-item">
            <span className="comparison-label">React Component</span>
            <div className="code-block">
              <code>
                {'<Greet name="Alice" age={25} />'}{'\n'}
                function Greet({'{ name, age }'})
              </code>
            </div>
          </div>
        </div>

        <CodePlayground 
          files={functionAnalogyExample} 
          title="Components are just functions!"
        />
      </section>

      <section className="section">
        <h2 className="section-title">The children Prop (Composition)</h2>
        <p className="section-description">
          The special <code className="inline-code">children</code> prop lets you pass JSX 
          as content between a component's opening and closing tags. 
          This is called <strong>composition</strong>.
        </p>

        <CodePlayground 
          files={childrenExample} 
          title="Using the children prop"
        />

        <div className="concept-card info">
          <h3>Why is this powerful?</h3>
          <p>
            The <code className="inline-code">Card</code> component doesn't need to know what goes inside it. 
            It just provides a wrapper/container. The parent decides what content to put in!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">🎯 Key Takeaway</div>
          <p>
            <strong>Props flow DOWN</strong> from parent to child (one-way data flow). 
            Use regular props for specific data, and <code className="inline-code">children</code> 
            for flexible content composition. Props are read-only — a component cannot modify its own props!
          </p>
        </div>
      </section>
    </div>
  )
}

export default PropsTab
