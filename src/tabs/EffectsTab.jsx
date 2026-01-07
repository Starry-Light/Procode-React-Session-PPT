import CodePlayground from '../components/CodePlayground'

function EffectsTab() {
  const timerExample = {
    '/App.js': `import { useState, useEffect } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // This code runs AFTER the component renders
    // when isRunning changes
    
    if (!isRunning) return;  // Don't start timer if paused

    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function - runs before next effect or unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);  // Dependency array: re-run when isRunning changes

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ 
      padding: 40, 
      fontFamily: 'system-ui',
      textAlign: 'center' 
    }}>
      <h1>Stopwatch Timer ⏱️</h1>
      <p style={{ 
        fontSize: 64, 
        fontWeight: 'bold',
        color: '#228be6' 
      }}>
        {seconds}s
      </p>
      <div>
        <button 
          onClick={() => setIsRunning(!isRunning)}
          style={{ 
            padding: '12px 24px', 
            fontSize: 16,
            margin: 8,
            cursor: 'pointer',
            background: isRunning ? '#fa5252' : '#40c057',
            color: 'white',
            border: 'none',
            borderRadius: 8
          }}
        >
          {isRunning ? '⏸️ Pause' : '▶️ Start'}
        </button>
        <button 
          onClick={reset}
          style={{ 
            padding: '12px 24px', 
            fontSize: 16,
            margin: 8,
            cursor: 'pointer'
          }}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}`,
  }

  const fetchExample = {
    '/App.js': `import { useState, useEffect } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    // Start loading
    setLoading(true);
    
    // Fetch data from external API
    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [userId]);  // Re-fetch when userId changes

  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1>Fetch User Data 👤</h1>
      
      <div style={{ marginBottom: 20 }}>
        <label>User ID: </label>
        <select 
          value={userId} 
          onChange={(e) => setUserId(Number(e.target.value))}
          style={{ padding: 8 }}
        >
          {[1,2,3,4,5].map(id => (
            <option key={id} value={id}>User {id}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading... ⏳</p>
      ) : user ? (
        <div style={{ 
          background: '#f8f9fa', 
          padding: 20, 
          borderRadius: 8 
        }}>
          <h2>{user.name}</h2>
          <p>📧 {user.email}</p>
          <p>🏢 {user.company?.name}</p>
          <p>📍 {user.address?.city}</p>
        </div>
      ) : (
        <p>Failed to load user</p>
      )}
    </div>
  );
}`,
  }

  const dependencyExample = {
    '/App.js': `import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');

  // This effect runs on EVERY render (no deps)
  useEffect(() => {
    console.log('🔄 Effect ran (no deps)');
  });

  // This effect runs ONCE on mount (empty deps)
  useEffect(() => {
    console.log('🚀 Effect ran once (mount)');
  }, []);

  // This effect runs when count changes
  useEffect(() => {
    console.log('🔢 Count changed to:', count);
  }, [count]);

  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1>Dependency Array Demo</h1>
      <p style={{ color: '#666' }}>Open the console to see effect logs!</p>
      
      <div style={{ 
        display: 'flex', 
        gap: 20, 
        marginTop: 20 
      }}>
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(c => c + 1)}>
            Increment
          </button>
        </div>
        
        <div>
          <p>Name: {name}</p>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      
      <div style={{ 
        marginTop: 20, 
        padding: 16, 
        background: '#fff3bf',
        borderRadius: 8 
      }}>
        <strong>Try this:</strong>
        <ol style={{ marginTop: 8, paddingLeft: 20 }}>
          <li>Click "Increment" - see which effects run</li>
          <li>Type in the input - see which effects run</li>
        </ol>
      </div>
    </div>
  );
}`,
  }

  return (
    <div>
      <section className="section">
        <h2 className="section-title">What is useEffect?</h2>
        <p className="section-description">
          <code className="inline-code">useEffect</code> lets you synchronize your component with 
          external systems like APIs, timers, or the DOM. It's your "escape hatch" from React's 
          declarative world into the imperative world.
        </p>

        <div className="concept-card info">
          <h3>When to use useEffect</h3>
          <ul className="feature-list">
            <li>Fetching data from an API</li>
            <li>Setting up subscriptions or event listeners</li>
            <li>Timers (setTimeout, setInterval)</li>
            <li>Manually updating the DOM</li>
            <li>Logging or analytics</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Example: Timer</h2>
        <p className="section-description">
          Let's build a stopwatch using <code className="inline-code">useEffect</code> and <code className="inline-code">setInterval</code>.
        </p>

        <CodePlayground 
          files={timerExample} 
          title="Timer with useEffect"
        />

        <div className="concept-card">
          <h3>Effect Structure</h3>
          <div className="code-block">
            <code>
              useEffect(() =&gt; {'{'}{'\n'}
              {'  '}// Setup: runs after render{'\n'}
              {'  '}const id = setInterval(...);{'\n'}
              {'\n'}
              {'  '}// Cleanup: runs before next effect or unmount{'\n'}
              {'  '}return () =&gt; clearInterval(id);{'\n'}
              {'}'}, [dependencies]);  // When to re-run
            </code>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Example: Fetching Data</h2>
        <p className="section-description">
          The most common use of <code className="inline-code">useEffect</code> is fetching data from an API.
        </p>

        <CodePlayground 
          files={fetchExample} 
          title="Data fetching with useEffect"
        />

        <div className="callout tip">
          <span className="callout-icon">💡</span>
          <div>
            <strong>Pattern:</strong> Use loading state to show a spinner while fetching, 
            then update to show the data once it arrives. Handle errors gracefully!
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">The Dependency Array</h2>
        <p className="section-description">
          The second argument to <code className="inline-code">useEffect</code> controls WHEN the effect runs.
        </p>

        <div className="comparison-grid">
          <div className="comparison-item">
            <span className="comparison-label">No dependency array</span>
            <div className="code-block">
              <code>useEffect(() =&gt; {'{...}'});</code>
            </div>
            <p>Runs after EVERY render</p>
          </div>
          <div className="comparison-item">
            <span className="comparison-label">Empty array</span>
            <div className="code-block">
              <code>useEffect(() =&gt; {'{...}'}, []);</code>
            </div>
            <p>Runs ONCE on mount</p>
          </div>
          <div className="comparison-item">
            <span className="comparison-label">With dependencies</span>
            <div className="code-block">
              <code>useEffect(() =&gt; {'{...}'}, [a, b]);</code>
            </div>
            <p>Runs when a or b changes</p>
          </div>
        </div>

        <CodePlayground 
          files={dependencyExample} 
          title="Dependency array behavior"
        />
      </section>

      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">🎯 Key Takeaway</div>
          <p>
            <code className="inline-code">useEffect</code> is for side effects - anything that 
            interacts with the "outside world". Always consider: What should trigger this effect? 
            (dependencies) and What needs cleanup? (return function). It's an escape hatch - 
            use it when you need to synchronize with external systems!
          </p>
        </div>
      </section>
    </div>
  )
}

export default EffectsTab
