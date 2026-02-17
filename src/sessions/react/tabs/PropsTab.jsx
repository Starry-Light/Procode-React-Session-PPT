import CodePlayground from '../components/CodePlayground'

function PropsTab() {
  // Step 1: What are props - simplest example
  const whatArePropsExample = {
    '/App.js': `// A simple component that receives one prop
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default function App() {
  return <Welcome name="Alice" />;
}`,
  }

  // Step 2: Passing multiple props
  const multiplePropsExample = {
    '/App.js': `// Passing multiple props
function Card(props) {
  return (
    <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Card 
        title="React Basics" 
        description="Learn the fundamentals of React"
      />
      <Card 
        title="Components" 
        description="Reusable pieces of UI"
      />
    </div>
  );
}`,
  }

  // Step 3: Accessing props with destructuring
  const destructuringExample = {
    '/App.js': `// Receiving props with destructuring (cleaner!)
function Card({ title, description }) {
  return (
    <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Card 
        title="Props" 
        description="Pass data to components"
      />
      <Card 
        title="Reusable" 
        description="Use the same component many times"
      />
    </div>
  );
}`,
  }

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



  return (
    <div>
      {/* Step 1: What are props */}
      <section className="section">
        <h2 className="section-title">What are Props?</h2>
        <p className="section-description">
          Props (short for "properties") are how we pass data from a parent component to a child component.
          Think of them like arguments to a function — you pass information in, and the component uses it.
        </p>

        <div className="concept-card info" style={{ color: 'white' }}>
          <h3>Props are Read-Only</h3>
          <p>
            A component receives props from its parent and cannot change them. This ensures predictable, 
            one-way data flow. If you need to change something, use <code className="inline-code">useState</code> instead.
          </p>
        </div>

        <CodePlayground 
          files={whatArePropsExample} 
          title="Step 1: Your First Prop"
        />

        <div className="callout tip">
          <span className="callout-icon">💡</span>
          <div>
            In the example above, <code className="inline-code">name</code> is the prop. 
            It's passed to the component with <code className="inline-code">&lt;Welcome name="Alice" /&gt;</code>, 
            then accessed inside as <code className="inline-code">props.name</code>.
          </div>
        </div>
      </section>

      {/* Step 2: Multiple props */}
      <section className="section">
        <h2 className="section-title">Passing Multiple Props</h2>
        <p className="section-description">
          Components can receive multiple pieces of data. Each prop is passed as an attribute on the JSX tag, 
          and the component accesses them all via the <code className="inline-code">props</code> object.
        </p>

        <CodePlayground 
          files={multiplePropsExample} 
          title="Step 2: Multiple Props"
        />

        <div className="concept-card">
          <h3>How Props Flow</h3>
          <ul className="feature-list">
            <li>Parent component passes data: <code className="inline-code">&lt;Card title="..." description="..." /&gt;</code></li>
            <li>Child component receives all props in an object: <code className="inline-code">props = {'{ title: "...", description: "..." }'}</code></li>
            <li>Child accesses each prop: <code className="inline-code">props.title</code>, <code className="inline-code">props.description</code></li>
          </ul>
        </div>
      </section>

      {/* Step 3: Destructuring */}
      <section className="section">
        <h2 className="section-title">Destructuring Props (The Cleaner Way)</h2>
        <p className="section-description">
          Writing <code className="inline-code">props.title</code> and <code className="inline-code">props.description</code> 
          everywhere gets repetitive. JavaScript destructuring lets us extract the props directly in the function parameters.
        </p>

        <CodePlayground 
          files={destructuringExample} 
          title="Step 3: Destructured Props"
        />

        <div className="concept-card success">
          <h3>Why Destructure?</h3>
          <ul className="feature-list">
            <li><strong>Cleaner code:</strong> Use <code className="inline-code">title</code> instead of <code className="inline-code">props.title</code></li>
            <li><strong>Obvious dependencies:</strong> See exactly which props the component needs right in the parameters</li>
            <li><strong>Less repetition:</strong> No need to type <code className="inline-code">props</code> over and over</li>
          </ul>
        </div>

        <div className="callout tip">
          <span className="callout-icon">💡</span>
          <div>
            <code className="inline-code">function Card({'{ title, description }'}) {'{}'}</code> is equivalent to 
            <code className="inline-code">function Card(props) {'{ const title = props.title; const description = props.description; }'}</code> 
            — but much shorter!
          </div>
        </div>
      </section>

      {/* Step 4: Recap before functions */}
      <section className="section">
        <div className="key-takeaway" style={{ color: 'white' }}>
          <div className="key-takeaway-title">🎯 Key Concepts So Far</div>
          <ul className="feature-list" style={{ marginTop: 12 }}>
            <li><strong>Props pass data down:</strong> Parent → Child, one-way flow</li>
            <li><strong>Props are read-only:</strong> The child can't modify them</li>
            <li><strong>Destructure for cleaner code:</strong> Extract what you need right in the parameters</li>
            <li><strong>Same component, different data:</strong> Use the same component with different props to display different content</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default PropsTab
