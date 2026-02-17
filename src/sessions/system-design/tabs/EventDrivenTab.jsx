import { useState } from 'react'

function EventDrivenTab() {
  const [step, setStep] = useState(0)

  const maxSteps = 5

  return (
    <div>
      <section className="section">
        <h2 className="section-title">Event-Driven Architecture</h2>
        <p className="section-description">
          Instead of services calling each other directly, they communicate through events — 
          enabling loose coupling, scalability, and resilience. Used by Netflix, Uber, LinkedIn.
        </p>
      </section>

      {/* Interactive Flow */}
      <section className="section">
        <h3 style={{ color: '#e2e8f0', fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'center' }}>
          🛒 E-Commerce Order Flow — Event-Driven
        </h3>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
          <button
            onClick={() => setStep(prev => Math.min(prev + 1, maxSteps))}
            disabled={step >= maxSteps}
            style={{
              padding: '0.5rem 1.5rem',
              background: step >= maxSteps ? '#333' : 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: step >= maxSteps ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem'
            }}
          >
            {step === 0 ? '▶ Start Order Flow' : step >= maxSteps ? '✓ Complete' : '→ Next Event'}
          </button>
          <button
            onClick={() => setStep(0)}
            style={{
              padding: '0.5rem 1.5rem',
              background: 'rgba(255,255,255,0.05)',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.1)',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem'
            }}
          >
            🔄 Reset
          </button>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Event Bus in the center */}
          <div style={{
            background: 'linear-gradient(90deg, #8b5cf620, #8b5cf640, #8b5cf620)',
            borderRadius: '12px',
            padding: '1rem 2rem',
            textAlign: 'center',
            margin: '0 auto 2rem',
            maxWidth: '600px',
            border: '2px solid #8b5cf640',
            position: 'relative'
          }}>
            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#a78bfa' }}>
              📨 Event Bus (Kafka / RabbitMQ)
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0.25rem 0 0' }}>
              All events flow through here
            </p>

            {/* Event badges */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '0.75rem'
            }}>
              {[
                { label: 'OrderPlaced', active: step >= 1, color: '#3b82f6' },
                { label: 'PaymentProcessed', active: step >= 2, color: '#22c55e' },
                { label: 'InventoryUpdated', active: step >= 3, color: '#f59e0b' },
                { label: 'ShipmentCreated', active: step >= 4, color: '#ef4444' },
                { label: 'NotificationSent', active: step >= 5, color: '#ec4899' },
              ].map(evt => (
                <span key={evt.label} style={{
                  background: evt.active ? `${evt.color}30` : 'rgba(255,255,255,0.05)',
                  color: evt.active ? evt.color : '#475569',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  border: `1px solid ${evt.active ? `${evt.color}50` : 'rgba(255,255,255,0.05)'}`,
                  transition: 'all 0.5s ease'
                }}>
                  {evt.active ? '✓ ' : ''}{evt.label}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem'
          }}>
            {[
              { name: 'Order Service', icon: '🛒', color: '#3b82f6', activeAt: 1, desc: 'Receives order, emits OrderPlaced' },
              { name: 'Payment Service', icon: '💳', color: '#22c55e', activeAt: 2, desc: 'Listens for OrderPlaced, charges card' },
              { name: 'Inventory Service', icon: '📦', color: '#f59e0b', activeAt: 3, desc: 'Listens for PaymentProcessed, reserves stock' },
              { name: 'Shipping Service', icon: '🚚', color: '#ef4444', activeAt: 4, desc: 'Listens for InventoryUpdated, creates shipment' },
              { name: 'Notification Service', icon: '🔔', color: '#ec4899', activeAt: 5, desc: 'Listens for all events, sends emails/SMS' },
            ].map(svc => (
              <div key={svc.name} style={{
                background: step >= svc.activeAt ? `${svc.color}15` : 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                padding: '1.25rem 0.75rem',
                border: `2px solid ${step >= svc.activeAt ? `${svc.color}40` : 'rgba(255,255,255,0.05)'}`,
                textAlign: 'center',
                transition: 'all 0.5s ease',
                opacity: step >= svc.activeAt ? 1 : 0.4,
                transform: step >= svc.activeAt ? 'scale(1)' : 'scale(0.95)'
              }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '0.5rem',
                  filter: step >= svc.activeAt ? 'none' : 'grayscale(100%)',
                  transition: 'filter 0.5s ease'
                }}>
                  {svc.icon}
                </div>
                <h4 style={{
                  color: step >= svc.activeAt ? svc.color : '#475569',
                  fontSize: '0.85rem',
                  margin: '0 0 0.5rem',
                  transition: 'color 0.5s ease'
                }}>
                  {svc.name}
                </h4>
                <p style={{
                  fontSize: '0.65rem',
                  color: '#64748b',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  {svc.desc}
                </p>
                {step >= svc.activeAt && (
                  <div style={{
                    marginTop: '0.5rem',
                    fontSize: '0.6rem',
                    color: svc.color,
                    fontWeight: '700'
                  }}>
                    ↑ LISTENING
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patterns */}
      <section className="section">
        <h2 className="section-title">Common Event-Driven Patterns</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {[
            {
              title: 'Pub/Sub',
              icon: '📡',
              color: '#3b82f6',
              desc: 'Publishers emit events, multiple subscribers consume them independently. One-to-many communication.',
              example: 'Kafka Topics, AWS SNS'
            },
            {
              title: 'Event Sourcing',
              icon: '📜',
              color: '#8b5cf6',
              desc: 'Store every state change as an event. Replay events to reconstruct state at any point in time.',
              example: 'Banking ledgers, audit trails'
            },
            {
              title: 'CQRS',
              icon: '↔️',
              color: '#22c55e',
              desc: 'Separate read and write models. Optimize writes for storage, reads for queries independently.',
              example: 'Command Query Responsibility Segregation'
            }
          ].map(pattern => (
            <div key={pattern.title} style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: `1px solid ${pattern.color}33`,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{pattern.icon}</div>
              <h4 style={{ color: pattern.color, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{pattern.title}</h4>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                {pattern.desc}
              </p>
              <span style={{
                fontSize: '0.7rem',
                color: '#64748b',
                background: 'rgba(255,255,255,0.05)',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px'
              }}>
                {pattern.example}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">⚡ Interview Tip</div>
          <p>
            Event-driven architecture shines for <strong>decoupling</strong> and <strong>async workflows</strong>. 
            In interviews, mention specific tools (Kafka for high-throughput streaming, RabbitMQ for task queues). 
            Discuss tradeoffs: eventual consistency, debugging difficulty, message ordering challenges. 
            The key phrase to use: <strong>"loose coupling, high cohesion."</strong>
          </p>
        </div>
      </section>
    </div>
  )
}

export default EventDrivenTab
