import { useState } from 'react'

function CdnTab() {
  const [requestStep, setRequestStep] = useState(0)

  return (
    <div>
      <section className="section">
        <h2 className="section-title">Content Delivery Networks (CDN)</h2>
        <p className="section-description">
          CDNs cache your content on servers around the world so users get data from the nearest location. 
          This is how Netflix streams 4K video and websites load in milliseconds globally.
        </p>
      </section>

      {/* Interactive CDN flow */}
      <section className="section">
        <h3 style={{ color: '#e2e8f0', textAlign: 'center', marginBottom: '1.5rem' }}>
          How a CDN Request Works
        </h3>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
          <button
            onClick={() => setRequestStep(prev => Math.min(prev + 1, 4))}
            disabled={requestStep >= 4}
            style={{
              padding: '0.5rem 1.5rem',
              background: requestStep >= 4 ? '#333' : 'linear-gradient(135deg, #06b6d4, #0891b2)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: requestStep >= 4 ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem'
            }}
          >
            {requestStep === 0 ? '▶ User Requests Image' : requestStep >= 4 ? '✓ Delivered!' : '→ Next Step'}
          </button>
          <button
            onClick={() => setRequestStep(0)}
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
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            {/* User */}
            <div style={{
              background: requestStep >= 1 ? '#3b82f620' : 'rgba(255,255,255,0.03)',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
              border: `2px solid ${requestStep >= 1 ? '#3b82f640' : 'rgba(255,255,255,0.05)'}`,
              transition: 'all 0.5s ease',
              minWidth: '120px'
            }}>
              <div style={{ fontSize: '2.5rem' }}>👤</div>
              <p style={{ color: '#60a5fa', fontWeight: '600', margin: '0.5rem 0 0', fontSize: '0.85rem' }}>User</p>
              <p style={{ color: '#64748b', fontSize: '0.7rem', margin: '0.25rem 0 0' }}>🇮🇳 India</p>
            </div>

            {/* Arrow 1 */}
            <div style={{
              color: requestStep >= 1 ? '#3b82f6' : 'rgba(255,255,255,0.1)',
              transition: 'color 0.5s ease',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem' }}>→</div>
              <div style={{ fontSize: '0.6rem' }}>DNS lookup</div>
            </div>

            {/* CDN Edge */}
            <div style={{
              background: requestStep >= 2 ? '#22c55e20' : 'rgba(255,255,255,0.03)',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
              border: `2px solid ${requestStep >= 2 ? '#22c55e40' : 'rgba(255,255,255,0.05)'}`,
              transition: 'all 0.5s ease',
              minWidth: '140px'
            }}>
              <div style={{ fontSize: '2.5rem' }}>🌐</div>
              <p style={{ color: '#4ade80', fontWeight: '600', margin: '0.5rem 0 0', fontSize: '0.85rem' }}>CDN Edge</p>
              <p style={{ color: '#64748b', fontSize: '0.7rem', margin: '0.25rem 0 0' }}>Mumbai PoP</p>
              {requestStep >= 2 && (
                <div style={{
                  marginTop: '0.5rem',
                  background: requestStep >= 4 ? '#22c55e30' : '#f59e0b30',
                  borderRadius: '6px',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.65rem',
                  color: requestStep >= 4 ? '#4ade80' : '#fbbf24',
                  fontWeight: '700'
                }}>
                  {requestStep >= 4 ? '✅ CACHE HIT (next time)' : '❌ CACHE MISS'}
                </div>
              )}
            </div>

            {/* Arrow 2 */}
            <div style={{
              color: requestStep >= 3 ? '#f59e0b' : 'rgba(255,255,255,0.1)',
              transition: 'color 0.5s ease',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem' }}>{requestStep >= 4 ? '←' : '→'}</div>
              <div style={{ fontSize: '0.6rem' }}>{requestStep >= 4 ? 'cached!' : 'fetch'}</div>
            </div>

            {/* Origin */}
            <div style={{
              background: requestStep >= 3 ? '#8b5cf620' : 'rgba(255,255,255,0.03)',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
              border: `2px solid ${requestStep >= 3 ? '#8b5cf640' : 'rgba(255,255,255,0.05)'}`,
              transition: 'all 0.5s ease',
              minWidth: '140px'
            }}>
              <div style={{ fontSize: '2.5rem' }}>🏠</div>
              <p style={{ color: '#a78bfa', fontWeight: '600', margin: '0.5rem 0 0', fontSize: '0.85rem' }}>Origin Server</p>
              <p style={{ color: '#64748b', fontSize: '0.7rem', margin: '0.25rem 0 0' }}>🇺🇸 US-East</p>
            </div>
          </div>

          {/* Step description */}
          <div style={{
            textAlign: 'center',
            marginTop: '2rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '8px',
            minHeight: '60px'
          }}>
            {requestStep === 0 && <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Click "User Requests Image" to start the flow</p>}
            {requestStep === 1 && <p style={{ color: '#60a5fa', fontSize: '0.9rem', margin: 0 }}>📡 Step 1: User requests image.jpg → DNS resolves to nearest CDN edge node (Mumbai)</p>}
            {requestStep === 2 && <p style={{ color: '#4ade80', fontSize: '0.9rem', margin: 0 }}>🔍 Step 2: CDN edge checks cache → Cache MISS (first request) → must fetch from origin</p>}
            {requestStep === 3 && <p style={{ color: '#fbbf24', fontSize: '0.9rem', margin: 0 }}>📥 Step 3: Edge fetches from origin server in US-East → receives image + caches it locally</p>}
            {requestStep === 4 && <p style={{ color: '#a78bfa', fontSize: '0.9rem', margin: 0 }}>🚀 Step 4: Image delivered to user! Next request will be a CACHE HIT — ~10ms instead of ~200ms</p>}
          </div>
        </div>
      </section>

      {/* Global PoP Map */}
      <section className="section">
        <h2 className="section-title">CDN Points of Presence (PoPs) — Global View</h2>
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {[
              { region: 'North America', cities: 'NYC, LA, Chicago, Dallas', pops: '50+', flag: '🇺🇸', color: '#3b82f6' },
              { region: 'Europe', cities: 'London, Frankfurt, Paris, Amsterdam', pops: '40+', flag: '🇪🇺', color: '#22c55e' },
              { region: 'Asia Pacific', cities: 'Tokyo, Mumbai, Singapore, Sydney', pops: '35+', flag: '🌏', color: '#f59e0b' },
              { region: 'South America', cities: 'São Paulo, Buenos Aires', pops: '15+', flag: '🌎', color: '#8b5cf6' },
            ].map(r => (
              <div key={r.region} style={{
                background: `${r.color}08`,
                borderRadius: '12px',
                padding: '1.25rem',
                border: `1px solid ${r.color}20`,
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{r.flag}</div>
                <h4 style={{ color: r.color, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{r.region}</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem' }}>{r.cities}</p>
                <span style={{
                  background: `${r.color}20`,
                  color: r.color,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: '600'
                }}>
                  {r.pops} PoPs
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What CDNs serve */}
      <section className="section">
        <h2 className="section-title">What Can a CDN Serve?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }}>
          {[
            { icon: '🖼️', title: 'Static Assets', items: ['Images (JPEG, PNG, WebP)', 'CSS & JavaScript', 'Fonts & Icons'], color: '#3b82f6' },
            { icon: '🎬', title: 'Media & Streaming', items: ['Video (HLS, DASH)', 'Audio files', 'Live streams'], color: '#ef4444' },
            { icon: '⚡', title: 'Dynamic Content', items: ['API responses (edge compute)', 'Personalized pages', 'A/B test variants'], color: '#22c55e' },
          ].map(cat => (
            <div key={cat.title} style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: `1px solid ${cat.color}30`,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{cat.icon}</div>
              <h4 style={{ color: cat.color, fontSize: '1.05rem', marginBottom: '0.75rem' }}>{cat.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cat.items.map(item => (
                  <li key={item} style={{
                    padding: '0.3rem 0',
                    fontSize: '0.85rem',
                    color: '#94a3b8'
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Popular CDN providers */}
      <section className="section">
        <h2 className="section-title">Popular CDN Providers</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1rem'
        }}>
          {[
            { name: 'CloudFlare', icon: '☁️', desc: 'Free tier, DDoS protection', color: '#f59e0b' },
            { name: 'AWS CloudFront', icon: '🔶', desc: 'Tight AWS integration', color: '#ff9900' },
            { name: 'Akamai', icon: '🔵', desc: 'Enterprise leader, largest network', color: '#0096d6' },
            { name: 'Fastly', icon: '⚡', desc: 'Edge compute, real-time purge', color: '#ff282d' },
            { name: 'Azure CDN', icon: '🔷', desc: 'Microsoft ecosystem', color: '#0078d4' },
          ].map(provider => (
            <div key={provider.name} style={{
              background: `${provider.color}08`,
              borderRadius: '10px',
              padding: '1rem',
              border: `1px solid ${provider.color}20`,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{provider.icon}</div>
              <h5 style={{ color: provider.color, fontSize: '0.85rem', marginBottom: '0.25rem' }}>{provider.name}</h5>
              <p style={{ fontSize: '0.7rem', color: '#64748b', margin: 0 }}>{provider.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Performance comparison */}
      <section className="section">
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h3 style={{ color: '#e2e8f0', textAlign: 'center', marginBottom: '1.5rem' }}>
            ⏱️ Latency Comparison: With vs Without CDN
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '700px', margin: '0 auto' }}>
            {/* Without CDN */}
            <div>
              <h4 style={{ color: '#ef4444', textAlign: 'center', marginBottom: '1rem' }}>❌ Without CDN</h4>
              {[
                { location: 'NYC → NYC Server', time: '20ms', width: '10%' },
                { location: 'London → NYC Server', time: '85ms', width: '42%' },
                { location: 'Mumbai → NYC Server', time: '180ms', width: '90%' },
                { location: 'Tokyo → NYC Server', time: '200ms', width: '100%' },
              ].map(item => (
                <div key={item.location} style={{ marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                    <span>{item.location}</span>
                    <span style={{ color: '#f87171', fontWeight: '600' }}>{item.time}</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '4px', height: '8px' }}>
                    <div style={{
                      background: 'linear-gradient(90deg, #ef4444, #f87171)',
                      height: '100%',
                      width: item.width,
                      borderRadius: '4px',
                      transition: 'width 1s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* With CDN */}
            <div>
              <h4 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '1rem' }}>✅ With CDN</h4>
              {[
                { location: 'NYC → NYC Edge', time: '5ms', width: '10%' },
                { location: 'London → London Edge', time: '8ms', width: '16%' },
                { location: 'Mumbai → Mumbai Edge', time: '10ms', width: '20%' },
                { location: 'Tokyo → Tokyo Edge', time: '7ms', width: '14%' },
              ].map(item => (
                <div key={item.location} style={{ marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                    <span>{item.location}</span>
                    <span style={{ color: '#4ade80', fontWeight: '600' }}>{item.time}</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '4px', height: '8px' }}>
                    <div style={{
                      background: 'linear-gradient(90deg, #22c55e, #4ade80)',
                      height: '100%',
                      width: item.width,
                      borderRadius: '4px',
                      transition: 'width 1s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">⚡ Interview Tip</div>
          <p>
            In system design interviews, <strong>always mention CDN</strong> when discussing read-heavy systems. 
            Key talking points: <strong>cache invalidation strategies</strong> (TTL, purge, versioned URLs), 
            <strong>cache hit ratio</strong> (aim for 95%+), and <strong>edge computing</strong> (running logic 
            at edge nodes). CDN is often the <strong>#1 performance win</strong> — cheaper than scaling your servers.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CdnTab
