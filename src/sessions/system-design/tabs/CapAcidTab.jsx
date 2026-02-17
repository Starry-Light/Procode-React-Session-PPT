import { useState } from 'react'

function CapAcidTab() {
  const [capChoice, setCapChoice] = useState(null)

  return (
    <div>
      <section className="section">
        <h2 className="section-title">CAP Theorem & ACID Principles</h2>
        <p className="section-description">
          Two foundational concepts that every system designer must understand. These come up in 
          almost every system design interview.
        </p>
      </section>

      {/* ===== CAP THEOREM ===== */}
      <section className="section">
        <h2 className="section-title">CAP Theorem</h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', fontSize: '1rem', marginBottom: '2rem' }}>
          In a distributed system, you can only guarantee <strong style={{ color: '#e2e8f0' }}>two out of three</strong> properties. 
          Click each combination to explore!
        </p>

        {/* CAP Triangle */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '16px',
          padding: '3rem 2rem',
          border: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center'
        }}>
          {/* Triangle visual */}
          <div style={{ position: 'relative', width: '400px', height: '360px', margin: '0 auto' }}>
            {/* C */}
            <div
              onClick={() => setCapChoice(capChoice === 'CP' || capChoice === 'CA' ? null : 'CA')}
              style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: (capChoice === 'CP' || capChoice === 'CA')
                  ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                  : 'rgba(59,130,246,0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: `3px solid ${(capChoice === 'CP' || capChoice === 'CA') ? '#3b82f6' : '#3b82f640'}`,
                transition: 'all 0.3s ease',
                boxShadow: (capChoice === 'CP' || capChoice === 'CA')
                  ? '0 0 30px rgba(59,130,246,0.4)'
                  : 'none'
              }}
            >
              <span style={{ fontSize: '2rem' }}>🔒</span>
              <strong style={{ color: '#93c5fd', fontSize: '1.1rem' }}>Consistency</strong>
              <span style={{ fontSize: '0.65rem', color: '#60a5fa' }}>Every read gets latest write</span>
            </div>

            {/* A */}
            <div
              onClick={() => setCapChoice(capChoice === 'CA' || capChoice === 'AP' ? null : 'AP')}
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: (capChoice === 'CA' || capChoice === 'AP')
                  ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                  : 'rgba(34,197,94,0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: `3px solid ${(capChoice === 'CA' || capChoice === 'AP') ? '#22c55e' : '#22c55e40'}`,
                transition: 'all 0.3s ease',
                boxShadow: (capChoice === 'CA' || capChoice === 'AP')
                  ? '0 0 30px rgba(34,197,94,0.4)'
                  : 'none'
              }}
            >
              <span style={{ fontSize: '2rem' }}>✅</span>
              <strong style={{ color: '#86efac', fontSize: '1.1rem' }}>Availability</strong>
              <span style={{ fontSize: '0.65rem', color: '#4ade80' }}>Every request gets response</span>
            </div>

            {/* P */}
            <div
              onClick={() => setCapChoice(capChoice === 'CP' || capChoice === 'AP' ? null : 'CP')}
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: (capChoice === 'CP' || capChoice === 'AP')
                  ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                  : 'rgba(245,158,11,0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: `3px solid ${(capChoice === 'CP' || capChoice === 'AP') ? '#f59e0b' : '#f59e0b40'}`,
                transition: 'all 0.3s ease',
                boxShadow: (capChoice === 'CP' || capChoice === 'AP')
                  ? '0 0 30px rgba(245,158,11,0.4)'
                  : 'none'
              }}
            >
              <span style={{ fontSize: '2rem' }}>🌐</span>
              <strong style={{ color: '#fcd34d', fontSize: '1.1rem' }}>Partition</strong>
              <span style={{ fontSize: '0.65rem', color: '#fbbf24' }}>Tolerance</span>
            </div>

            {/* Lines connecting */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <line x1="200" y1="75" x2="70" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              <line x1="200" y1="75" x2="330" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              <line x1="70" y1="310" x2="330" y2="310" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            </svg>
          </div>

          {/* Info boxes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginTop: '2rem',
            maxWidth: '800px',
            margin: '2rem auto 0'
          }}>
            {[
              {
                id: 'CP', label: 'CP Systems', color: '#3b82f6',
                desc: 'Consistent + Partition Tolerant. May reject requests during partitions.',
                examples: 'MongoDB, HBase, Redis Cluster',
                sacrifices: 'Availability'
              },
              {
                id: 'AP', label: 'AP Systems', color: '#22c55e',
                desc: 'Available + Partition Tolerant. May serve stale data during partitions.',
                examples: 'Cassandra, DynamoDB, CouchDB',
                sacrifices: 'Consistency'
              },
              {
                id: 'CA', label: 'CA Systems', color: '#f59e0b',
                desc: 'Consistent + Available. Cannot handle network partitions (single node).',
                examples: 'Traditional RDBMS (single node)',
                sacrifices: 'Partition Tolerance'
              }
            ].map(item => (
              <div
                key={item.id}
                onClick={() => setCapChoice(capChoice === item.id ? null : item.id)}
                style={{
                  background: capChoice === item.id ? `${item.color}20` : 'rgba(255,255,255,0.03)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  border: `2px solid ${capChoice === item.id ? `${item.color}50` : 'rgba(255,255,255,0.05)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
              >
                <h4 style={{ color: item.color, fontSize: '1rem', marginBottom: '0.5rem' }}>{item.label}</h4>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem', lineHeight: '1.5' }}>{item.desc}</p>
                <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0 0 0.25rem' }}>
                  <strong>Examples:</strong> {item.examples}
                </p>
                <p style={{ fontSize: '0.75rem', color: '#ef4444' }}>
                  ❌ Sacrifices: {item.sacrifices}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACID ===== */}
      <section className="section">
        <h2 className="section-title">ACID Properties</h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', fontSize: '1rem', marginBottom: '2rem' }}>
          The four guarantees that make database transactions reliable. Think of them as the "safety net" for your data.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem'
        }}>
          {[
            {
              letter: 'A',
              title: 'Atomicity',
              icon: '⚛️',
              color: '#3b82f6',
              desc: 'All or nothing. Either the entire transaction succeeds, or it completely rolls back. No partial updates.',
              example: 'Bank transfer: debit $100 from A AND credit $100 to B — if credit fails, debit is reversed.',
              visual: '✅ Commit ALL  or  ❌ Rollback ALL'
            },
            {
              letter: 'C',
              title: 'Consistency',
              icon: '🔒',
              color: '#22c55e',
              desc: 'Data moves from one valid state to another. All rules, constraints, and triggers are satisfied.',
              example: 'Account balance can never go negative — the DB enforces this constraint on every transaction.',
              visual: 'Valid State → Transaction → Valid State'
            },
            {
              letter: 'I',
              title: 'Isolation',
              icon: '🔐',
              color: '#f59e0b',
              desc: 'Concurrent transactions don\'t interfere with each other. Each transaction sees a consistent snapshot.',
              example: 'Two users booking the last seat — isolation prevents both from succeeding (only one wins).',
              visual: 'T1 ║ T2 ║ T3 — run independently'
            },
            {
              letter: 'D',
              title: 'Durability',
              icon: '💾',
              color: '#8b5cf6',
              desc: 'Once committed, data survives crashes, power failures, and disasters. Written to non-volatile storage.',
              example: 'After "Payment confirmed!", even a server crash won\'t lose the record — it\'s written to disk.',
              visual: 'Committed → 💾 Persisted Forever'
            }
          ].map(prop => (
            <div key={prop.letter} style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              borderRadius: '16px',
              padding: '2rem',
              border: `2px solid ${prop.color}30`,
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Large letter background */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-10px',
                fontSize: '8rem',
                fontWeight: '900',
                color: `${prop.color}08`,
                lineHeight: '1'
              }}>
                {prop.letter}
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{prop.icon}</span>
                  <div>
                    <h3 style={{ color: prop.color, fontSize: '1.25rem', margin: 0 }}>{prop.title}</h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {prop.desc}
                </p>

                <div style={{
                  background: `${prop.color}10`,
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  border: `1px solid ${prop.color}20`,
                  marginBottom: '0.75rem'
                }}>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                    <strong style={{ color: prop.color }}>Example:</strong> {prop.example}
                  </p>
                </div>

                <div style={{
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  color: prop.color,
                  textAlign: 'center',
                  padding: '0.5rem',
                  background: `${prop.color}08`,
                  borderRadius: '6px'
                }}>
                  {prop.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACID vs BASE */}
      <section className="section">
        <h2 className="section-title">ACID vs BASE</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '2rem',
            border: '2px solid #3b82f630'
          }}>
            <h3 style={{ color: '#60a5fa', fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'center' }}>
              🔒 ACID (SQL Databases)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Strong consistency guaranteed',
                'Transactions are atomic',
                'Immediate data accuracy',
                'Best for: banking, e-commerce orders',
              ].map((item, i) => (
                <li key={i} style={{
                  display: 'flex', gap: '0.5rem', padding: '0.5rem 0',
                  color: '#e2e8f0', fontSize: '0.9rem'
                }}>
                  <span style={{ color: '#3b82f6' }}>→</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #1e2a1e 100%)',
            borderRadius: '16px',
            padding: '2rem',
            border: '2px solid #22c55e30'
          }}>
            <h3 style={{ color: '#4ade80', fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'center' }}>
              🌐 BASE (NoSQL Databases)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Basically Available — always responds',
                'Soft state — may change over time',
                'Eventually consistent — syncs later',
                'Best for: social feeds, IoT, analytics',
              ].map((item, i) => (
                <li key={i} style={{
                  display: 'flex', gap: '0.5rem', padding: '0.5rem 0',
                  color: '#e2e8f0', fontSize: '0.9rem'
                }}>
                  <span style={{ color: '#22c55e' }}>→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">⚡ Interview Tip</div>
          <p>
            CAP theorem is about <strong>distributed systems under network partitions</strong> — which is inevitable. 
            So the real choice is CP vs AP. For ACID, know that <strong>isolation levels</strong> (Read Uncommitted, 
            Read Committed, Repeatable Read, Serializable) trade performance for consistency. In interviews, 
            always tie these concepts back to <strong>specific use cases</strong>: "For a payment system, I'd choose 
            CP with ACID guarantees."
          </p>
        </div>
      </section>
    </div>
  )
}

export default CapAcidTab
