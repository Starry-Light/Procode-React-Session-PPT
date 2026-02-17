import { useState } from 'react'

function ArchitectureTiersTab() {
  const [activeArch, setActiveArch] = useState('two-tier')

  const boxStyle = (gradient, borderColor) => ({
    background: `linear-gradient(135deg, ${gradient})`,
    borderRadius: '12px',
    padding: '1.5rem 2rem',
    textAlign: 'center',
    color: 'white',
    boxShadow: `0 8px 30px ${borderColor}40`,
    border: `2px solid ${borderColor}60`,
    minWidth: '160px'
  })

  const arrowStyle = {
    fontSize: '2rem',
    color: 'rgba(255, 255, 255, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div>
      <section className="section">
        <h2 className="section-title">2-Tier vs 3-Tier Architecture</h2>
        <p className="section-description">
          Understanding how applications are structured in layers. This is one of the most common 
          interview topics for system design fundamentals.
        </p>
      </section>

      {/* Toggle */}
      <section className="section">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { id: 'two-tier', label: '2-Tier Architecture', icon: '📦' },
            { id: 'three-tier', label: '3-Tier Architecture', icon: '🏗️' },
            { id: 'n-tier', label: 'N-Tier Architecture', icon: '🏢' }
          ].map(arch => (
            <button
              key={arch.id}
              onClick={() => setActiveArch(arch.id)}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                background: activeArch === arch.id
                  ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                  : 'rgba(255, 255, 255, 0.08)',
                color: activeArch === arch.id ? 'white' : 'rgba(255, 255, 255, 0.7)',
                border: activeArch === arch.id
                  ? '2px solid rgba(139, 92, 246, 0.5)'
                  : '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-sans)'
              }}
            >
              {arch.icon} {arch.label}
            </button>
          ))}
        </div>

        {/* 2-Tier Diagram */}
        {activeArch === 'two-tier' && (
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            minHeight: '400px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#60a5fa',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                Client-Server Model
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={boxStyle('#3b82f6, #2563eb', '#3b82f6')}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🖥️</div>
                <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.25rem' }}>Client Tier</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>UI + Business Logic</p>
                <p style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: '0.5rem' }}>Desktop app, thick client</p>
              </div>

              <div style={arrowStyle}>
                <div>
                  <div>⇄</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>SQL Queries</div>
                </div>
              </div>

              <div style={boxStyle('#8b5cf6, #7c3aed', '#8b5cf6')}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🗄️</div>
                <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.25rem' }}>Database Tier</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>Data Storage</p>
                <p style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: '0.5rem' }}>MySQL, PostgreSQL</p>
              </div>
            </div>

            <div style={{
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              maxWidth: '600px',
              margin: '2rem auto 0'
            }}>
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                borderRadius: '8px',
                padding: '1rem',
                border: '1px solid rgba(34, 197, 94, 0.2)'
              }}>
                <h5 style={{ color: '#4ade80', marginBottom: '0.5rem' }}>✅ Pros</h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
                  <li>• Simple to build & deploy</li>
                  <li>• Low latency (direct DB access)</li>
                  <li>• Good for small apps</li>
                </ul>
              </div>
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '8px',
                padding: '1rem',
                border: '1px solid rgba(239, 68, 68, 0.2)'
              }}>
                <h5 style={{ color: '#f87171', marginBottom: '0.5rem' }}>❌ Cons</h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
                  <li>• Poor scalability</li>
                  <li>• Security risk (DB exposed)</li>
                  <li>• Tight coupling</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 3-Tier Diagram */}
        {activeArch === 'three-tier' && (
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            minHeight: '400px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{
                background: 'rgba(139, 92, 246, 0.2)',
                color: '#a78bfa',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                Most Common Web Architecture
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <div style={boxStyle('#3b82f6, #2563eb', '#3b82f6')}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌐</div>
                <h3 style={{ fontSize: '1.15rem', margin: '0 0 0.25rem' }}>Presentation</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.8, margin: 0 }}>UI Layer</p>
                <p style={{ fontSize: '0.65rem', opacity: 0.6, marginTop: '0.5rem' }}>React, Angular, Vue</p>
              </div>

              <div style={arrowStyle}>
                <div>
                  <div>⇄</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>HTTP/REST</div>
                </div>
              </div>

              <div style={boxStyle('#f59e0b, #d97706', '#f59e0b')}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⚙️</div>
                <h3 style={{ fontSize: '1.15rem', margin: '0 0 0.25rem' }}>Application</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.8, margin: 0 }}>Business Logic</p>
                <p style={{ fontSize: '0.65rem', opacity: 0.6, marginTop: '0.5rem' }}>Node.js, Spring, Django</p>
              </div>

              <div style={arrowStyle}>
                <div>
                  <div>⇄</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>SQL/ORM</div>
                </div>
              </div>

              <div style={boxStyle('#8b5cf6, #7c3aed', '#8b5cf6')}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🗄️</div>
                <h3 style={{ fontSize: '1.15rem', margin: '0 0 0.25rem' }}>Data</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.8, margin: 0 }}>Storage Layer</p>
                <p style={{ fontSize: '0.65rem', opacity: 0.6, marginTop: '0.5rem' }}>PostgreSQL, MongoDB</p>
              </div>
            </div>

            <div style={{
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              maxWidth: '600px',
              margin: '2rem auto 0'
            }}>
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                borderRadius: '8px',
                padding: '1rem',
                border: '1px solid rgba(34, 197, 94, 0.2)'
              }}>
                <h5 style={{ color: '#4ade80', marginBottom: '0.5rem' }}>✅ Pros</h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
                  <li>• Separation of concerns</li>
                  <li>• Scalable independently</li>
                  <li>• Secure (DB not exposed)</li>
                  <li>• Reusable backend APIs</li>
                </ul>
              </div>
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '8px',
                padding: '1rem',
                border: '1px solid rgba(239, 68, 68, 0.2)'
              }}>
                <h5 style={{ color: '#f87171', marginBottom: '0.5rem' }}>❌ Cons</h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
                  <li>• More complex setup</li>
                  <li>• Network latency between tiers</li>
                  <li>• Requires DevOps knowledge</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* N-Tier */}
        {activeArch === 'n-tier' && (
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            minHeight: '400px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{
                background: 'rgba(245, 158, 11, 0.2)',
                color: '#fbbf24',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                Enterprise-Grade Architecture
              </span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              {[
                { icon: '🌐', title: 'CDN / Load Balancer', color: '#06b6d4', desc: 'CloudFlare, AWS ALB' },
                { icon: '🖥️', title: 'Presentation Tier', color: '#3b82f6', desc: 'React, Next.js' },
                { icon: '🚦', title: 'API Gateway', color: '#ef4444', desc: 'Kong, AWS API GW' },
                { icon: '⚙️', title: 'Business Logic Tier', color: '#f59e0b', desc: 'Microservices' },
                { icon: '💾', title: 'Caching Layer', color: '#22c55e', desc: 'Redis, Memcached' },
                { icon: '🗄️', title: 'Data Tier', color: '#8b5cf6', desc: 'SQL + NoSQL + Search' },
              ].map((layer, i) => (
                <div key={i}>
                  <div style={{
                    background: `linear-gradient(135deg, ${layer.color}20, ${layer.color}10)`,
                    border: `2px solid ${layer.color}40`,
                    borderRadius: '12px',
                    padding: '1rem 3rem',
                    textAlign: 'center',
                    minWidth: '350px',
                    transition: 'all 0.2s ease'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{layer.icon}</span>
                    <span style={{ color: layer.color, fontWeight: '600', marginLeft: '0.75rem', fontSize: '1rem' }}>
                      {layer.title}
                    </span>
                    <span style={{ color: '#64748b', fontSize: '0.75rem', marginLeft: '0.5rem' }}>
                      ({layer.desc})
                    </span>
                  </div>
                  {i < 5 && <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '1.25rem' }}>↕</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Key Takeaway */}
      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">⚡ Interview Tip</div>
          <p>
            Most modern web applications use <strong>3-tier architecture</strong>. When asked in interviews, 
            always start with 3-tier and then explain how it can evolve into N-tier as the system grows. 
            Mention that each tier can be <strong>scaled independently</strong> — that's the key advantage.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ArchitectureTiersTab
