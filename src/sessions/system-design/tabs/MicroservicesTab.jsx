import { useState } from 'react'

function MicroservicesTab() {
  const [showMonolith, setShowMonolith] = useState(true)

  return (
    <div>
      <section className="section">
        <h2 className="section-title">Microservice Architecture</h2>
        <p className="section-description">
          Breaking a monolith into small, independently deployable services — the backbone of 
          modern scalable systems at Netflix, Amazon, Uber, and more.
        </p>
      </section>

      {/* Toggle: Monolith vs Microservices */}
      <section className="section">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <button
            onClick={() => setShowMonolith(true)}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: showMonolith ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'rgba(255,255,255,0.05)',
              color: 'white',
              border: showMonolith ? '2px solid rgba(239,68,68,0.5)' : '2px solid rgba(255,255,255,0.1)',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-sans)'
            }}
          >
            🧱 Monolith
          </button>
          <button
            onClick={() => setShowMonolith(false)}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: !showMonolith ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'rgba(255,255,255,0.05)',
              color: 'white',
              border: !showMonolith ? '2px solid rgba(34,197,94,0.5)' : '2px solid rgba(255,255,255,0.1)',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-sans)'
            }}
          >
            🔲 Microservices
          </button>
        </div>

        {/* Monolith Diagram */}
        {showMonolith && (
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '3rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
              borderRadius: '16px',
              padding: '3rem 2rem',
              maxWidth: '500px',
              margin: '0 auto',
              border: '3px solid rgba(239,68,68,0.4)',
              boxShadow: '0 20px 60px rgba(239,68,68,0.2)'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>🧱 Monolithic Application</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {['User Auth', 'Product Catalog', 'Order Processing', 'Payment', 'Notifications', 'Analytics'].map(mod => (
                  <div key={mod} style={{
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    fontSize: '0.85rem',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    {mod}
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: '1rem',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '8px',
                padding: '0.75rem',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.7)'
              }}>
                🗄️ Single Shared Database
              </div>
            </div>

            <div style={{
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              maxWidth: '600px',
              margin: '2rem auto 0'
            }}>
              {[
                { icon: '⚠️', text: 'Single point of failure', color: '#f87171' },
                { icon: '⚠️', text: 'Hard to scale individual parts', color: '#f87171' },
                { icon: '⚠️', text: 'Entire app redeploys', color: '#f87171' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(239,68,68,0.1)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  border: '1px solid rgba(239,68,68,0.2)',
                  fontSize: '0.8rem',
                  color: item.color
                }}>
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Microservices Diagram */}
        {!showMonolith && (
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {/* API Gateway at top */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                borderRadius: '12px',
                padding: '1rem 3rem',
                color: 'white',
                boxShadow: '0 8px 30px rgba(245,158,11,0.3)',
                border: '2px solid rgba(245,158,11,0.4)'
              }}>
                <div style={{ fontSize: '1.5rem' }}>🚦</div>
                <strong>API Gateway</strong>
                <p style={{ fontSize: '0.7rem', margin: '0.25rem 0 0', opacity: 0.8 }}>Routing, Auth, Rate Limiting</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '1.5rem', marginBottom: '1rem' }}>
              ↙ ↓ ↘
            </div>

            {/* Services Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {[
                { name: 'User Service', icon: '👤', color: '#3b82f6', db: 'PostgreSQL', port: ':3001' },
                { name: 'Product Service', icon: '📦', color: '#8b5cf6', db: 'MongoDB', port: ':3002' },
                { name: 'Order Service', icon: '🛒', color: '#22c55e', db: 'PostgreSQL', port: ':3003' },
                { name: 'Payment Service', icon: '💳', color: '#f59e0b', db: 'PostgreSQL', port: ':3004' },
                { name: 'Notification Service', icon: '🔔', color: '#ef4444', db: 'Redis', port: ':3005' },
                { name: 'Analytics Service', icon: '📊', color: '#06b6d4', db: 'ClickHouse', port: ':3006' },
              ].map(svc => (
                <div key={svc.name} style={{
                  background: `${svc.color}10`,
                  borderRadius: '12px',
                  padding: '1.25rem',
                  border: `2px solid ${svc.color}30`,
                  textAlign: 'center',
                  transition: 'transform 0.2s ease',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{svc.icon}</div>
                  <h4 style={{ color: svc.color, fontSize: '0.95rem', margin: '0 0 0.25rem' }}>{svc.name}</h4>
                  <span style={{
                    fontSize: '0.65rem', color: '#64748b',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px'
                  }}>{svc.port}</span>
                  <div style={{
                    marginTop: '0.75rem',
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: '6px',
                    padding: '0.4rem',
                    fontSize: '0.7rem',
                    color: '#94a3b8'
                  }}>
                    🗄️ {svc.db}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Broker */}
            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '1.5rem', margin: '1rem 0' }}>
              ↕ ↕ ↕
            </div>
            <div style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, #ec4899, #be185d)',
              borderRadius: '12px',
              padding: '1rem 3rem',
              display: 'inline-block',
              color: 'white',
              margin: '0 auto',
              width: 'fit-content',
              boxShadow: '0 8px 30px rgba(236,72,153,0.3)',
              border: '2px solid rgba(236,72,153,0.4)',
              marginLeft: 'calc(50% - 150px)'
            }}>
              <div style={{ fontSize: '1.5rem' }}>📨</div>
              <strong>Message Broker</strong>
              <p style={{ fontSize: '0.7rem', margin: '0.25rem 0 0', opacity: 0.8 }}>Kafka / RabbitMQ</p>
            </div>

            <div style={{
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              maxWidth: '600px',
              margin: '2rem auto 0'
            }}>
              {[
                { icon: '✅', text: 'Independent scaling', color: '#4ade80' },
                { icon: '✅', text: 'Technology diversity', color: '#4ade80' },
                { icon: '✅', text: 'Fault isolation', color: '#4ade80' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(34,197,94,0.1)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  border: '1px solid rgba(34,197,94,0.2)',
                  fontSize: '0.8rem',
                  color: item.color,
                  textAlign: 'center'
                }}>
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Communication Patterns */}
      <section className="section">
        <h2 className="section-title">Service Communication Patterns</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '2rem',
            border: '2px solid #3b82f633'
          }}>
            <h3 style={{ color: '#60a5fa', fontSize: '1.2rem', marginBottom: '1rem' }}>🔄 Synchronous (REST/gRPC)</h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ background: '#3b82f620', padding: '0.75rem 1rem', borderRadius: '8px', color: '#60a5fa', fontSize: '0.85rem' }}>
                Service A
              </div>
              <div style={{ color: '#60a5fa' }}>
                → HTTP →
              </div>
              <div style={{ background: '#3b82f620', padding: '0.75rem 1rem', borderRadius: '8px', color: '#60a5fa', fontSize: '0.85rem' }}>
                Service B
              </div>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
              <li>• Request-response pattern</li>
              <li>• Caller waits for response</li>
              <li>• Simple but creates coupling</li>
              <li>• Use for: queries, real-time reads</li>
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '2rem',
            border: '2px solid #22c55e33'
          }}>
            <h3 style={{ color: '#4ade80', fontSize: '1.2rem', marginBottom: '1rem' }}>📨 Asynchronous (Events)</h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{ background: '#22c55e20', padding: '0.75rem 1rem', borderRadius: '8px', color: '#4ade80', fontSize: '0.85rem' }}>
                Producer
              </div>
              <div style={{ color: '#4ade80', fontSize: '0.8rem' }}>
                → Queue →
              </div>
              <div style={{ background: '#22c55e20', padding: '0.75rem 1rem', borderRadius: '8px', color: '#4ade80', fontSize: '0.85rem' }}>
                Consumer
              </div>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
              <li>• Fire-and-forget pattern</li>
              <li>• Loose coupling</li>
              <li>• Better fault tolerance</li>
              <li>• Use for: notifications, logging</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">⚡ Interview Tip</div>
          <p>
            Don't always jump to microservices! Start with a <strong>modular monolith</strong> and 
            extract services as needed. In interviews, explain that microservices add complexity 
            (distributed tracing, data consistency, network failures). A monolith is often the right 
            choice for small teams and early-stage products. <strong>"Start monolith, extract when needed"</strong> 
            shows maturity.
          </p>
        </div>
      </section>
    </div>
  )
}

export default MicroservicesTab
