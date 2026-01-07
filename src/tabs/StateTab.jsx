import CodePlayground from '../components/CodePlayground'
import RevealAnswer from '../components/RevealAnswer'

function StateTab() {
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

  const multipleStateExample = {
    '/App.js': `import { useState } from 'react';

export default function App() {
  // You can have multiple pieces of state!
  const [name, setName] = useState('');
  const [age, setAge] = useState(18);
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div style={{ 
      padding: 20, 
      fontFamily: 'system-ui',
      maxWidth: 400 
    }}>
      <h1>Form with Multiple State</h1>
      
      <div style={{ marginBottom: 16 }}>
        <label>Name: </label>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, width: '100%' }}
        />
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <label>Age: </label>
        <input 
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          style={{ padding: 8, width: 100 }}
        />
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <label>
          <input 
            type="checkbox"
            checked={isStudent}
            onChange={(e) => setIsStudent(e.target.checked)}
          />
          {' '}Is a student
        </label>
      </div>
      
      <div style={{ 
        background: '#f8f9fa', 
        padding: 16, 
        borderRadius: 8 
      }}>
        <strong>Current State:</strong>
        <pre>{JSON.stringify({ name, age, isStudent }, null, 2)}</pre>
      </div>
    </div>
  );
}`,
  }

  return (
    <div>
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

      <section className="section">
        <h2 className="section-title">UI = f(State)</h2>
        <p className="section-description">
          This is the core mental model of React. Your <strong>UI is a function of your state</strong>. 
          Given the same state, you'll always get the same UI.
        </p>

        <div className="comparison-grid">
          <div className="comparison-item">
            <span className="comparison-label">The Formula</span>
            <div style={{fontSize: 24, textAlign: 'center', padding: 20}}>
              <strong>UI = f(State)</strong>
            </div>
            <p style={{color: '#666', textAlign: 'center'}}>
              "The UI is determined by the current state"
            </p>
          </div>
          <div className="comparison-item">
            <span className="comparison-label">In Practice</span>
            <p>You don't manipulate the DOM directly. Instead:</p>
            <ol style={{paddingLeft: 20}}>
              <li>Define what state you need</li>
              <li>Describe how UI looks for any state</li>
              <li>Update state, React updates UI ✨</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Multiple Pieces of State</h2>
        <p className="section-description">
          You can use <code className="inline-code">useState</code> multiple times in a single component!
        </p>

        <CodePlayground 
          files={multipleStateExample} 
          title="Multiple useState calls"
        />
      </section>

      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">🎯 Key Takeaway</div>
          <p>
            <strong>State is data that changes over time.</strong> Use <code className="inline-code">useState</code> 
            to create state variables. When you call the setter function, React re-renders the component 
            and the UI updates automatically. Never mutate state directly!
          </p>
        </div>
      </section>
    </div>
  )
}

export default StateTab
