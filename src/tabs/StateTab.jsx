import CodePlayground from '../components/CodePlayground'
import RevealAnswer from '../components/RevealAnswer'

function StateTab() {
  // Example for useState import and basic state
  const addingStateVariableExample = {
    '/App.js': `import { useState } from 'react';

export default function App() {
  const [index, setIndex] = useState(0);
  
  return (
    <div>
      <p>Current index: {index}</p>
      <button onClick={() => setIndex(index + 1)}>
        Next
      </button>
    </div>
  );
}`,
  }

  // This demonstrates WHY normal variables don't work
  const brokenExample = {
    '/App.js': `// ❌ THIS DOESN'T WORK! But why?

export default function App() {
  let count = 0;  // Just a regular variable

  function handleClick() {
    count = count + 1;
    console.log("count is now:", count);
    // Check the console - count IS changing!
  }

  return (
    <div style={{ 
      padding: 40, 
      fontFamily: 'system-ui',
      textAlign: 'center' 
    }}>
      <h1>Broken Counter 😢</h1>
      <p style={{ fontSize: 48, fontWeight: 'bold' }}>
        {count}
      </p>
      <button 
        onClick={handleClick}
        style={{ 
          padding: '12px 24px', 
          fontSize: 18,
          cursor: 'pointer'
        }}
      >
        Click me! (+1)
      </button>
      <p style={{ color: '#888', marginTop: 20 }}>
        ☝️ Click the button... nothing happens!?
        <br/>
        (Check the console - the variable IS changing)
      </p>
    </div>
  );
}`,
  }

  const workingExample = {
    '/App.js': `// ✅ THIS WORKS! Using useState

import { useState } from 'react';

export default function App() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);  // This triggers a re-render!
  }

  return (
    <div style={{ 
      padding: 40, 
      fontFamily: 'system-ui',
      textAlign: 'center' 
    }}>
      <h1>Working Counter 🎉</h1>
      <p style={{ fontSize: 48, fontWeight: 'bold', color: '#228be6' }}>
        {count}
      </p>
      <button 
        onClick={handleClick}
        style={{ 
          padding: '12px 24px', 
          fontSize: 18,
          cursor: 'pointer',
          background: '#228be6',
          color: 'white',
          border: 'none',
          borderRadius: 8
        }}
      >
        Click me! (+1)
      </button>
      <p style={{ color: '#888', marginTop: 20 }}>
        ☝️ Now it works! 🎊
      </p>
    </div>
  );
}`,
  }

 
  

  return (
    <div>
                      <div style={{ marginBottom: 32 ,justifyItems:'center'}}>
          <img 
            src="/6.jpg" 
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
      {/* Render and Commit Cycle Intro */}
      <section className="section">
        <h2 className="section-title">How React Updates the Screen</h2>
        <p className="section-description">
          When something changes in your React app, React goes through three steps to update what you see on the screen. 
          Think of it like a restaurant fulfilling an order:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, margin: '24px 0' }}>
          <div className="concept-card info">
            <h3>1. Triggering a Render</h3>
            <p>
              A user does something (clicks a button, types in a form), or props change. This is like <strong>placing a food order at the counter</strong>.
            </p>
          </div>

          <div className="concept-card info">
            <h3>2. Rendering the Component</h3>
            <p>
              React calls your component function to figure out what should appear on screen. This is like <strong>the kitchen preparing the food</strong>.
            </p>
          </div>

          <div className="concept-card info">
            <h3>3. Committing to the DOM</h3>
            <p>
              React updates the actual HTML on the page. This is like <strong>bringing the finished food to your table</strong>.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: 32,justifySelf:'center' }}>
          <img 
            src="/renderAndCommit.png" 
            alt="React render and commit cycle diagram" 
            style={{ 
              maxWidth: '100%', 
              borderRadius: 12, 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
            }}
          />
        </div>

      <section className="section">
        <h2 className="section-title">Virtual Dom</h2>
        <p className="section-description">
          The Virtual DOM is React's secret weapon for performance. Instead of directly manipulating 
          the real DOM (which is slow), React creates a lightweight JavaScript copy of the DOM tree. 
          When state changes, React compares the new virtual DOM with the previous one, calculates 
          the minimal set of changes needed, and then efficiently updates only those specific parts 
          of the real DOM. This process, called "reconciliation," makes React blazingly fast even 
          with complex UIs.
        </p>
        </section>

        <div style={{ marginBottom: 32,justifySelf:'center' }}>
          <img 
            src="/virtualDom.png" 
            alt="React render and commit cycle diagram" 
            style={{ 
              maxWidth: '100%', 
              borderRadius: 12, 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
            }}
          />
        </div>

        <div className="callout tip">
          <span className="callout-icon">💡</span>
          <div>
            React doesn't update the page every single time your code runs — it batches changes and updates the DOM efficiently. 
            This is one reason why React is so fast!
          </div>
        </div>
      </section>

      {/* Adding State Variables */}
      <section className="section">
        <h2 className="section-title">Adding a State Variable</h2>
        <p className="section-description">
          To add a state variable, import <code className="inline-code">useState</code> from React at the top of your file, 
          then replace a regular variable with a state variable.
        </p>

      

        {/* Step 2: Import useState */}
        <div style={{padding:20}}>
          <h3>Step 1: Import useState</h3>
          <p>Add this import at the top of your file:</p>
          <pre style={{ 
            background: '#f5f5f5', 
            padding: 12, 
            borderRadius: 6, 
            color: '#1f2328',
            fontFamily: 'Fira Mono, Consolas, monospace',
            fontSize: 14,
            lineHeight: 1.6,
            margin: '12px 0'
          }}>
{`import { useState } from 'react';`}
          </pre>
          <div className="callout info" style={{marginTop: 12}}>
            <span className="callout-icon">🎣</span>
            <div>
              <strong>What's a Hook?</strong> <code className="inline-code">useState</code> is a special function called a <em>Hook</em>. 
              Hooks are functions that "hook into" React features. They always start with <code className="inline-code">use</code> 
              (like <code className="inline-code">useState</code>, <code className="inline-code">useEffect</code>, etc.). 
              You can only call them at the top level of your component.
            </div>
          </div>
        </div>

        {/* Step 3: Replace with useState */}
        <div style={{padding:25}}>
          <h3>Step 2: Replace with useState</h3>
          <p>Replace the regular variable with <code className="inline-code">useState</code>:</p>
          <pre style={{ 
            background: '#f5f5f5', 
            padding: 12, 
            borderRadius: 6, 
            color: '#1f2328',
            fontFamily: 'Fira Mono, Consolas, monospace',
            fontSize: 14,
            lineHeight: 1.6,
            margin: '12px 0'
          }}>
{`const [index, setIndex] = useState(0);`}
          </pre>
        </div>

        <div className="concept-card">
          <h3>What Just Happened?</h3>
          <ul className="feature-list">
            <li><code className="inline-code">index</code> — The state variable (current value)</li>
            <li><code className="inline-code">setIndex</code> — The setter function (call this to update)</li>
            <li><code className="inline-code">useState(0)</code> — Initialize state with value 0</li>
          </ul>
        </div>

        {/* Step 4: Complete example */}
        <div className="concept-card warning">
          <h3>Step 3: Use setIndex to Update</h3>
          <p>Call the setter function to update state and trigger a re-render:</p>
          <pre style={{ 
            background: '#f5f5f5', 
            padding: 12, 
            borderRadius: 6, 
            color: '#1f2328',
            fontFamily: 'Fira Mono, Consolas, monospace',
            fontSize: 14,
            lineHeight: 1.6,
            margin: '12px 0'
          }}>
{`setIndex(index + 1);`}
          </pre>
          <p style={{ marginTop: 12, color: '#666' }}>
            This updates the state, triggers a re-render, and the component displays the new value!
          </p>
        </div>

        <div className="callout success">
          <span className="callout-icon">✓</span>
          <div>
            <strong>The Key Difference:</strong> When you call <code className="inline-code">setIndex()</code>, 
            React knows something changed and automatically re-renders your component with the new value.
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Why Can't We Just Use Normal Variables?</h2>
        <p className="section-description">
          Let's try to build a counter with a regular variable and see what happens...
        </p>

        <CodePlayground 
          files={brokenExample} 
          title="❌ Attempt 1: Using a Regular Variable"
        />

        <div className="callout error">
          <span className="callout-icon">🤔</span>
          <div>
            <strong>What's happening?</strong> The variable <code className="inline-code">count</code> IS changing 
            (check the console!), but the UI doesn't update. Why?
          </div>
        </div>

        <RevealAnswer buttonText="Show me why">
          <div className="concept-card warning">
            <h3>The Key Problem</h3>
            <p>
              When you change a regular variable, React has <strong>no way of knowing</strong> that something changed. 
              React only re-renders the component (and updates the UI) when:
            </p>
            <ul className="feature-list">
              <li>State changes (via useState setter)</li>
              <li>Props change (passed from parent)</li>
              <li>Parent re-renders</li>
            </ul>
            <p style={{marginTop: 16}}>
              Also, even if React DID know, the function runs again on each render, 
              which would reset <code className="inline-code">let count = 0</code> anyway!
            </p>
          </div>
        </RevealAnswer>
      </section>

      <section className="section">
        <h2 className="section-title">Enter: useState</h2>
        <p className="section-description">
          <code className="inline-code">useState</code> is a React "Hook" that lets you add state to your components. 
          When state changes, React automatically re-renders the component!
        </p>

        <CodePlayground 
          files={workingExample} 
          title="✅ The React Way: Using useState"
        />

        <div className="concept-card info">
          <h3>How useState Works</h3>
          <div className="code-block">
            <code>
              const [count, setCount] = useState(0);{'\n'}
              {'//     ↑        ↑              ↑'}{'\n'}
              {'//   current  setter       initial'}{'\n'}
              {'//   value    function     value'}
            </code>
          </div>
          <ul className="feature-list">
            <li><strong>count</strong> - the current value</li>
            <li><strong>setCount</strong> - function to update the value</li>
            <li><strong>0</strong> - the initial value (only used on first render)</li>
          </ul>
        </div>

        <div className="callout tip">
          <span className="callout-icon">🔄</span>
          <div>
            <strong>The Re-render Cycle:</strong>
            <ol style={{marginTop: 8, paddingLeft: 20}}>
              <li>User clicks button</li>
              <li><code className="inline-code">setCount(count + 1)</code> is called</li>
              <li>React schedules a re-render</li>
              <li>Component function runs again with new count value</li>
              <li>React updates the DOM to reflect the new UI</li>
            </ol>
          </div>
        </div>
      </section>

    </div>
  )
}

export default StateTab
