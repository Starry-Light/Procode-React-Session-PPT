import { useState } from 'react'

function SqlNoSqlTab() {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div>
      {/* Intro */}
      <section className="section">
        <h2 className="section-title">SQL vs NoSQL Databases</h2>
        <p className="section-description">
          One of the most fundamental decisions in system design — choosing the right database.
          Understanding the tradeoffs is critical for interviews and real-world architecture.
        </p>
      </section>

      {/* Side-by-side visual comparison */}
      <section className="section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* SQL Card */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '2rem',
            border: '2px solid #3b82f6',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '4px', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)'
            }} />
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🗃️</div>
              <h3 style={{ fontSize: '1.75rem', color: '#60a5fa', margin: 0 }}>SQL (Relational)</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                MySQL, PostgreSQL, Oracle, SQL Server
              </p>
            </div>

            {/* Table visual */}
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <p style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                📋 users TABLE
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(59, 130, 246, 0.3)' }}>
                    <th style={{ padding: '0.4rem', color: '#93c5fd', textAlign: 'left' }}>id</th>
                    <th style={{ padding: '0.4rem', color: '#93c5fd', textAlign: 'left' }}>name</th>
                    <th style={{ padding: '0.4rem', color: '#93c5fd', textAlign: 'left' }}>email</th>
                    <th style={{ padding: '0.4rem', color: '#93c5fd', textAlign: 'left' }}>age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>1</td>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>Alice</td>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>alice@mail.com</td>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>28</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>2</td>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>Bob</td>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>bob@mail.com</td>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>32</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>3</td>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>Carol</td>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>carol@mail.com</td>
                    <td style={{ padding: '0.4rem', color: '#e2e8f0' }}>25</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { icon: '✅', text: 'Fixed schema — data integrity enforced' },
                { icon: '✅', text: 'ACID compliant — strong consistency' },
                { icon: '✅', text: 'Powerful JOINs & complex queries' },
                { icon: '✅', text: 'Great for structured, relational data' },
                { icon: '⚠️', text: 'Vertical scaling can be expensive' },
                { icon: '⚠️', text: 'Schema changes can be painful' },
              ].map((item, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.4rem 0', color: '#e2e8f0', fontSize: '0.9rem'
                }}>
                  <span>{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* NoSQL Card */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #1e2a1e 100%)',
            borderRadius: '16px',
            padding: '2rem',
            border: '2px solid #22c55e',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '4px', background: 'linear-gradient(90deg, #22c55e, #4ade80)'
            }} />
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📄</div>
              <h3 style={{ fontSize: '1.75rem', color: '#4ade80', margin: 0 }}>NoSQL (Non-Relational)</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                MongoDB, Cassandra, Redis, DynamoDB
              </p>
            </div>

            {/* Document visual */}
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.5rem',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              color: '#4ade80',
              lineHeight: '1.6'
            }}>
              <p style={{ color: '#86efac', fontWeight: 'bold', marginBottom: '0.5rem' }}>📄 users COLLECTION</p>
              {'{'}<br/>
              &nbsp;&nbsp;"_id": "abc123",<br/>
              &nbsp;&nbsp;"name": "Alice",<br/>
              &nbsp;&nbsp;"email": "alice@mail.com",<br/>
              &nbsp;&nbsp;"hobbies": ["coding", "chess"],<br/>
              &nbsp;&nbsp;"address": {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"city": "NYC",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"zip": "10001"<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { icon: '✅', text: 'Flexible schema — evolve freely' },
                { icon: '✅', text: 'Horizontal scaling built-in' },
                { icon: '✅', text: 'Great for unstructured/semi-structured data' },
                { icon: '✅', text: 'High throughput for reads/writes' },
                { icon: '⚠️', text: 'Eventual consistency in many cases' },
                { icon: '⚠️', text: 'No JOINs — denormalization needed' },
              ].map((item, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.4rem 0', color: '#e2e8f0', fontSize: '0.9rem'
                }}>
                  <span>{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NoSQL Types */}
      <section className="section">
        <h2 className="section-title">Types of NoSQL Databases</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {[
            {
              type: 'Document', icon: '📄', color: '#22c55e',
              example: 'MongoDB, CouchDB',
              desc: 'JSON-like documents. Great for content management, catalogs.',
              visual: '{ key: value }'
            },
            {
              type: 'Key-Value', icon: '🔑', color: '#f59e0b',
              example: 'Redis, DynamoDB',
              desc: 'Simple key→value pairs. Blazing fast caching & sessions.',
              visual: 'key → value'
            },
            {
              type: 'Column-Family', icon: '📊', color: '#8b5cf6',
              example: 'Cassandra, HBase',
              desc: 'Columns grouped into families. Great for time-series & analytics.',
              visual: 'row → {col1, col2...}'
            },
            {
              type: 'Graph', icon: '🔗', color: '#ef4444',
              example: 'Neo4j, ArangoDB',
              desc: 'Nodes & edges. Perfect for social networks & recommendations.',
              visual: '(A)→[rel]→(B)'
            }
          ].map(db => (
            <div key={db.type} style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: `1px solid ${db.color}33`,
              textAlign: 'center',
              transition: 'transform 0.2s ease',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{db.icon}</div>
              <h4 style={{ color: db.color, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{db.type}</h4>
              <div style={{
                background: `${db.color}15`,
                borderRadius: '6px',
                padding: '0.5rem',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                color: db.color,
                marginBottom: '0.75rem'
              }}>
                {db.visual}
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>{db.desc}</p>
              <p style={{ fontSize: '0.7rem', color: '#64748b' }}>{db.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* When to use what */}
      <section className="section">
        <h2 className="section-title">When to Use What?</h2>
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: '#60a5fa', fontSize: '1.1rem', marginBottom: '1rem' }}>
                🗃️ Choose SQL when...
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Data has clear relationships (e.g., orders → products)',
                  'You need ACID transactions (banking, payments)',
                  'Data structure is well-defined & stable',
                  'Complex queries with JOINs are common',
                  'Data integrity is critical',
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '0.5rem', padding: '0.5rem 0',
                    color: '#e2e8f0', fontSize: '0.9rem', alignItems: 'flex-start'
                  }}>
                    <span style={{ color: '#3b82f6' }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4ade80', fontSize: '1.1rem', marginBottom: '1rem' }}>
                📄 Choose NoSQL when...
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Schema evolves rapidly (startups, MVPs)',
                  'Massive scale & high throughput needed',
                  'Data is hierarchical or semi-structured',
                  'Eventual consistency is acceptable',
                  'You need horizontal scaling across nodes',
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '0.5rem', padding: '0.5rem 0',
                    color: '#e2e8f0', fontSize: '0.9rem', alignItems: 'flex-start'
                  }}>
                    <span style={{ color: '#22c55e' }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interview question */}
      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">🎤 Interview Question</div>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            "You're designing an e-commerce platform. Would you use SQL or NoSQL for the product catalog? 
            What about the order processing system? Justify your choices."
          </p>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            style={{
              padding: '0.5rem 1.5rem',
              background: showAnswer ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600',
              fontFamily: 'var(--font-sans)'
            }}
          >
            {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          {showAnswer && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              color: '#e2e8f0',
              fontSize: '0.9rem',
              lineHeight: '1.7'
            }}>
              <strong>Product Catalog → NoSQL (MongoDB)</strong>: Products have varying attributes 
              (shoes have size, laptops have RAM). Flexible schema handles this well. Read-heavy, 
              easily cached, and can scale horizontally. <br/><br/>
              <strong>Order Processing → SQL (PostgreSQL)</strong>: Orders involve transactions across 
              inventory, payments, and shipping. ACID compliance ensures no double-charging or 
              inventory mismatch. Relationships between orders, line items, and customers are well-suited for SQL.
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">⚡ Key Takeaway</div>
          <p>
            There's no "best" database — only the right one for your use case. In interviews, 
            always discuss <strong>tradeoffs</strong>: consistency vs availability, schema rigidity vs flexibility, 
            vertical vs horizontal scaling. Many real systems use <strong>both</strong> (polyglot persistence).
          </p>
        </div>
      </section>
    </div>
  )
}

export default SqlNoSqlTab
