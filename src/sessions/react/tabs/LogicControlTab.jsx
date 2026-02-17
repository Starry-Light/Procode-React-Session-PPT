import CodePlayground from '../components/CodePlayground'

function LogicControlTab() {
  const conditionalAndExample = {
    '/App.js': `import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{ padding: '8px 16px', marginBottom: 20 }}
      >
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>

      {isLoggedIn && <p>Welcome back!</p>}
      {!isLoggedIn && <p>Please log in</p>}
    </div>
  );
}`,
  }

  const ternaryExample = {
    '/App.js': `import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light');

  const styles = {
    container: {
      padding: 40,
      fontFamily: 'system-ui',
      // Ternary for dynamic styles!
      background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
      color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
      minHeight: 200,
      transition: 'all 0.3s'
    }
  };

  return (
    <div style={styles.container}>
      <h1>Ternary Operator</h1>
      
      <button 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Toggle Theme
      </button>

      <p style={{ marginTop: 20 }}>
        {/* condition ? ifTrue : ifFalse */}
        Current theme: {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </p>

      {/* Ternary for different components */}
      {theme === 'dark' ? (
        <div style={{ 
          background: '#333', 
          padding: 16, 
          borderRadius: 8,
          marginTop: 16 
        }}>
          Dark mode content
        </div>
      ) : (
        <div style={{ 
          background: '#e7f5ff', 
          padding: 16, 
          borderRadius: 8,
          marginTop: 16 
        }}>
          Light mode content
        </div>
      )}
    </div>
  );
}`,
  }

  const listExample = {
    '/App.js': `import { useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Learn React', done: true },
  { id: 2, text: 'Build a project', done: false },
  { id: 3, text: 'Deploy to production', done: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1>Todo List (with .map)</h1>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {/* Map over the array to render each item */}
        {todos.map(todo => (
          // ⚠️ KEY is required! Use a unique identifier
          <li 
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              padding: 12,
              margin: '8px 0',
              background: todo.done ? '#d3f9d8' : '#fff3bf',
              borderRadius: 8,
              cursor: 'pointer',
              textDecoration: todo.done ? 'line-through' : 'none'
            }}
          >
            {todo.done ? '✅' : '⬜'} {todo.text}
          </li>
        ))}
      </ul>
      
      <p style={{ color: '#666', fontSize: 14 }}>
        Click a todo to toggle it!
      </p>
    </div>
  );
}`,
  
  }

  return (
    <div>
      <section className="section">
        <h2 className="section-title">Conditional Rendering with &amp;&amp;</h2>
        <p className="section-description">
          Use the <code className="inline-code">&&</code> operator to conditionally render elements. 
          If the left side is true, the right side is rendered.
        </p>

        <CodePlayground 
          files={conditionalAndExample} 
          title="The && Pattern"
        />

        <div className="concept-card">
          <h3>How it works</h3>
          <div className="code-block">
            <code>
              {'{condition && <Element />}'}{'\n'}
              {'\n'}
              {'// If condition is true  → renders <Element />'}{'\n'}
              {'// If condition is false → renders nothing'}
            </code>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Conditional Rendering with Ternary</h2>
        <p className="section-description">
          Use the ternary operator <code className="inline-code">? :</code> when you need to render 
          ONE thing OR ANOTHER thing.
        </p>

        <CodePlayground 
          files={ternaryExample} 
          title="The Ternary Pattern"
        />

        <div className="comparison-grid">
          <div className="comparison-item">
            <span className="comparison-label">Use && when</span>
            <p>Show something OR nothing</p>
            <div className="code-block">
              <code>{'{isLoggedIn && <Dashboard />}'}</code>
            </div>
          </div>
          <div className="comparison-item">
            <span className="comparison-label">Use Ternary when</span>
            <p>Show this OR that</p>
            <div className="code-block">
              <code>{'{isLoggedIn ? <Dashboard /> : <Login />}'}</code>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Rendering Lists with .map()</h2>
        <p className="section-description">
          Use JavaScript's <code className="inline-code">.map()</code> method to transform an array of data 
          into an array of elements.
        </p>

        <CodePlayground 
          files={listExample} 
          title="Mapping over arrays"
        />

        <div className="callout warning">
          <span className="callout-icon">⚠️</span>
          <div>
            <strong>Don't forget the key prop!</strong> Every item in a list needs a unique 
            <code className="inline-code">key</code> prop. Use IDs, not array indices!
          </div>
        </div>
      </section>

      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">🎯 Key Takeaway</div>
          <p>
            Use <code className="inline-code">&&</code> for "show or hide" logic, 
            ternary <code className="inline-code">? :</code> for "this or that" logic, 
            and <code className="inline-code">.map()</code> to render lists. 
            Always provide unique, stable <code className="inline-code">key</code> props!
          </p>
        </div>
      </section>
    </div>
  )
}

export default LogicControlTab
