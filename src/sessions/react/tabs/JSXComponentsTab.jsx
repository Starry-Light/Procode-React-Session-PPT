import CodePlayground from '../components/CodePlayground'

function JSXComponentsTab() {
  // Step 1: Starting with plain HTML
  const htmlStartingPoint = {
    '/index.html': `<!DOCTYPE html>
<html>
<body>
  <h1>Welcome to My App</h1>
  <p>This is a paragraph.</p>
  <button>Click Me</button>
</body>
</html>`
    
  }

  // Step 2: Empty component shell for audience to fill
  const emptyComponentTemplate = {
    '/App.js': `export default function App() {
  return (
    
  );
}`,
  }


  // Step 4: Using const variables with curly braces
  const variablesExample = {
    '/App.js': `export default function App() {
  const title = "Welcome to My App";
  const message = "This is a paragraph.";
  const buttonText = "Click Me";
  const count = 42;
  
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      <p>The answer is: {count}</p>
      <p>Math works too: 10 + 5 = {10 + 5}</p>
      <button>{buttonText}</button>
    </div>
  );
}`,
  }

  // Step 5: Using object variables
  const objectVariablesExample = {
    '/App.js': `export default function App() {
  const user = {
    name: "Sarah",
    age: 28,
    city: "New York",
    hobby: "Coding"
  };
  
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };
  
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Age: {user.age}</p>
      <p>From: {user.city}</p>
      <p>Loves: {user.hobby}</p>
      <button style={buttonStyle}>Click Me</button>
    </div>
  );
}`,
  }

  // Palette for HTML (blue) and JavaScript (yellow) visuals
  const palette = {
    htmlBg: '#eaf0ff',
    htmlBorder: '#bcd3ff',
    htmlText: '#1f2b45',
    jsBg: '#fff5d7',
    jsBorder: '#ffe4a8',
    jsText: '#946c23',
    cardShadow: '0 2px 12px rgba(0,0,0,0.12)'
  }

  return (
    <div>
      <section className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 className="section-title">The Power of Components</h2>
          <a 
            href="https://www.netflix.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              background: '#e50914',
              color: 'white',
              padding: '8px 16px',
              borderRadius: 6,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 12,
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(229, 9, 20, 0.3)',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(229, 9, 20, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(229, 9, 20, 0.3)';
            }}
          >
            See Netflix →
          </a>
        </div>

        {/* Hero showcase */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          borderRadius: 20,
          padding: 40,
          marginBottom: 30,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Floating orbs background */}
          <div style={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 200,
            height: 200,
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            bottom: -30,
            left: '30%',
            width: 150,
            height: 150,
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />

          <p style={{
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            marginBottom: 30,
            fontSize: 14,
            letterSpacing: 2,
            textTransform: 'uppercase'
          }}>
            One component → Infinite possibilities
          </p>

          {/* Button showcase */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
            marginBottom: 30
          }}>
            {[
              { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', text: 'Primary' },
              { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', text: 'Danger' },
              { bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', text: 'Info' },
              { bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', text: 'Success' },
              { bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', text: 'Warning' },
            ].map((btn, i) => (
              <button key={i} style={{
                background: btn.bg,
                border: 'none',
                padding: '12px 24px',
                borderRadius: 50,
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
              }}
              >
                {btn.text}
              </button>
            ))}
          </div>

          {/* Card showcase */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
          }}>
            {[
              { icon: '🚀', title: 'Launch', stat: '2.4k', color: '#667eea' },
              { icon: '❤️', title: 'Likes', stat: '18.2k', color: '#f5576c' },
              { icon: '👥', title: 'Users', stat: '842', color: '#4facfe' },
              { icon: '⭐', title: 'Stars', stat: '5.1k', color: '#43e97b' },
            ].map((card, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 16,
                padding: 20,
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = card.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{card.icon}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginBottom: 4 }}>{card.title}</div>
                <div style={{ color: 'white', fontSize: 28, fontWeight: 700 }}>{card.stat}</div>
              </div>
            ))}
          </div>

          {/* Avatar stack */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
            gap: 20
          }}>
            <div style={{ display: 'flex' }}>
              {['🧑‍💻', '👩‍🎨', '🧑‍🚀', '👨‍🔬', '👩‍🏫'].map((avatar, i) => (
                <div key={i} style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  marginLeft: i > 0 ? -12 : 0,
                  border: '3px solid #1a1a2e',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}>
                  {avatar}
                </div>
              ))}
            </div>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
              +2.4k developers
            </span>
          </div>
        </div>

        <div className="callout tip">
          <span className="callout-icon">💡</span>
          <div>
            <strong>All from reusable components!</strong> Button, Card, Avatar — each defined once, used many times with different data.
          </div>
        </div>
      </section>

        <div style={{ marginBottom: 32 ,justifyItems:'center'}}>
          <img 
            src="/1.png" 
            alt="React render and commit cycle diagram" 
            style={{ 
              display:'flex',
              justifyItems: 'center',
              maxWidth: '59%', 
              borderRadius: 12, 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
            }}
          />
        </div>

      {/* JSX: Putting markup into JavaScript visual section */}
      <section className="section" style={{ marginBottom: 40 }}>
        <h2 className="section-title">JSX: Putting markup into JavaScript</h2>
        <p className="section-description">
          The Web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript—often in separate files! Content was marked up inside HTML while the page's logic lived separately in JavaScript:
        </p>
        
        {/* Top row: HTML vs JavaScript separation */}
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', margin: '32px 0', flexWrap: 'wrap' }}>
          {/* HTML Card - Light/White */}
          <div style={{
            background: '#ffffff',
            border: '2px solid #d0d7de',
            borderRadius: 12,
            padding: 20,
            minWidth: 200,
            maxWidth: 260,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <pre style={{ 
              margin: 0, 
              background: 'none', 
              color: '#1f2328',
              fontFamily: 'Fira Mono, Consolas, monospace',
              fontSize: 15,
              lineHeight: 1.5
            }}>{`<div>
  <p></p>
  <form>
  </form>
</div>`}</pre>
            <span style={{ color: '#656d76', marginTop: 16, fontSize: 14, fontWeight: 500 }}>HTML</span>
          </div>
          
          {/* JavaScript Card - Yellow/Cream */}
          <div style={{
            background: '#fff8e1',
            border: '2px solid #ffe082',
            borderRadius: 12,
            padding: 20,
            minWidth: 200,
            maxWidth: 260,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <pre style={{ 
              margin: 0, 
              background: 'none', 
              color: '#5d4037',
              fontFamily: 'Fira Mono, Consolas, monospace',
              fontSize: 15,
              lineHeight: 1.5
            }}>{`isLoggedIn() {...}
onClick() {...}
onSubmit() {...}`}</pre>
            <span style={{ color: '#8d6e63', marginTop: 16, fontSize: 14, fontWeight: 500 }}>JavaScript</span>
          </div>
        </div>

        <p className="section-description" style={{ marginBottom: 32 }}>
          But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why <b>in React, rendering logic and markup live together in the same place—components</b>.
        </p>

        {/* Bottom row: Components with mixed HTML/JS - showing them living together */}
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Sidebar Component */}
          <div style={{
            background: '#fff8e1',
            border: '2px solid #ffe082',
            borderRadius: 12,
            padding: 16,
            minWidth: 240,
            maxWidth: 300,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            fontFamily: 'Fira Mono, Consolas, monospace',
            fontSize: 14,
            lineHeight: 1.6
          }}>
            <div style={{ color: '#5d4037', marginBottom: 4 }}>Sidebar() {'{'}</div>
            <div style={{ color: '#5d4037', marginLeft: 16 }}>if (isLoggedIn()) {'{'}</div>
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #d0d7de',
              borderRadius: 6, 
              padding: '4px 10px', 
              margin: '6px 0 6px 32px',
              color: '#1f2328',
              display: 'inline-block'
            }}>&lt;p&gt;Welcome&lt;/p&gt;</div>
            <div style={{ color: '#5d4037', marginLeft: 16 }}>{'}'} else {'{'}</div>
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #d0d7de',
              borderRadius: 6, 
              padding: '4px 10px', 
              margin: '6px 0 6px 32px',
              color: '#1f2328',
              display: 'inline-block'
            }}>&lt;Form /&gt;</div>
            <div style={{ color: '#5d4037', marginLeft: 16 }}>{'}'}</div>
            <div style={{ color: '#5d4037' }}>{'}'}</div>
          </div>

          {/* Form Component */}
          <div style={{
            background: '#fff8e1',
            border: '2px solid #ffe082',
            borderRadius: 12,
            padding: 16,
            minWidth: 260,
            maxWidth: 320,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            fontFamily: 'Fira Mono, Consolas, monospace',
            fontSize: 14,
            lineHeight: 1.6
          }}>
            <div style={{ color: '#5d4037', marginBottom: 4 }}>Form() {'{'}</div>
            <div style={{ color: '#5d4037', marginLeft: 16 }}>onClick() {'{'} ... {'}'}</div>
            <div style={{ color: '#5d4037', marginLeft: 16, marginBottom: 8 }}>onSubmit() {'{'} ... {'}'}</div>
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #d0d7de',
              borderRadius: 6, 
              padding: '8px 12px', 
              margin: '6px 0 6px 16px',
              color: '#1f2328',
              lineHeight: 1.8
            }}>
              &lt;form onSubmit&gt;<br/>
              &nbsp;&nbsp;&lt;input onClick /&gt;<br/>
              &nbsp;&nbsp;&lt;input onClick /&gt;<br/>
              &lt;/form&gt;
            </div>
            <div style={{ color: '#5d4037' }}>{'}'}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">From HTML to JSX Component</h2>
        <p className="section-description">
          Let's start with plain HTML and convert it into a React component. This is how most JSX components are born!
        </p>

        <div className="concept-card info">
          <h3>Step 1: Starting with HTML</h3>
          <p>Here's some plain HTML code we want to turn into a React component:</p>
        </div>

        <CodePlayground 
          files={htmlStartingPoint} 
          template="static"
          title="Step 1: Plain HTML"
        />
      </section>

      <section className="section">
        <div className="concept-card info">
          <h3>Step 2: The Component Shell</h3>
          <p>
            Every React component is a function that returns JSX. 
            We'll write the function structure and return statement. (You'll paste the HTML in during the demo!)
          </p>
        </div>

        <CodePlayground 
          files={emptyComponentTemplate} 
          title="Step 2: Empty Component Template"
        />

        <div className="callout tip">
          <span className="callout-icon">💡</span>
          <div>
            <strong>export default function App()</strong> - This creates a component named App and exports it.
            <br />
            <strong>return (...)</strong> - Every component returns JSX.
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">The Single Root Rule</h2>
        <p className="section-description">
          A component's return statement must have a single root element. Let's see what happens when you break this rule:
        </p>

       
        <div className="concept-card error">
          <h3>Why does this error happen?</h3>
          <p>
            React components can only return one element. If you try to return multiple elements at the top level, 
            React doesn't know which one is the "root" to attach to the page.
          </p>
        </div>

    
        <div className="callout success">
          <span className="callout-icon">✓</span>
          <div>
            The solution: Wrap multiple elements in a single container, usually a <code className="inline-code">&lt;div&gt;</code>.
            This becomes your "root" element.
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Using Variables in JSX with {}</h2>
        <p className="section-description">
          The curly braces <code className="inline-code">{'{}'}</code> are your escape hatch from HTML back to JavaScript. 
          Anything inside curly braces gets evaluated as JavaScript!
        </p>

        <CodePlayground 
          files={variablesExample} 
          title="Using const Variables with {}"
        />

        <div className="concept-card">
          <h3>How Variables Work in JSX</h3>
          <ul className="feature-list">
            <li>Define variables with <code className="inline-code">const</code> at the top of your component</li>
            <li>Use curly braces <code className="inline-code">{'{variableName}'}</code> to insert them into JSX</li>
            <li>You can put any JavaScript expression inside the braces</li>
            <li>Outside braces, you're writing HTML; inside braces, you're writing JavaScript</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Objects in JSX</h2>
        <p className="section-description">
          Objects are powerful in JSX. You can use them to group related data and even pass styling to elements!
        </p>

        <CodePlayground 
          files={objectVariablesExample} 
          title="Using Objects with JSX"
        />

        <div className="concept-card">
          <h3>Object Properties in JSX</h3>
          <ul className="feature-list">
            <li>Create objects with properties using <code className="inline-code">const object = {'{key: value}'}</code></li>
            <li>Access properties with dot notation: <code className="inline-code">object.key</code></li>
            <li>Use object properties in JSX: <code className="inline-code">{'{object.key}'}</code></li>
            <li>Objects are great for styling: <code className="inline-code">style={'{}'}</code> accepts an object</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">🎯 Key Takeaway</div>
          <p>
            JSX lets you write HTML-like code in JavaScript. Use <code className="inline-code">{'{}'}</code> to embed any JavaScript 
            expression. Remember: one root element per component, and variables/objects make your components dynamic and reusable!
          </p>
        </div>
      </section>
    </div>
  )
}

export default JSXComponentsTab
