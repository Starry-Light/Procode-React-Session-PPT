import { useState } from 'react'

function ShardingReplicationTab() {
  const [activeView, setActiveView] = useState('sharding')

  return (
    <div>
      <section className="section">
        <h2 className="section-title">Database Sharding & Replication</h2>
        <p className="section-description">
          Two essential strategies for scaling databases. Sharding distributes data across multiple servers; 
          replication copies data for redundancy and read performance.
        </p>
      </section>

      {/* Toggle */}
      <section className="section">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { id: 'sharding', label: '🔀 Sharding', desc: 'Horizontal Partitioning' },
            { id: 'replication', label: '📋 Replication', desc: 'Data Copies' },
          ].map(v => (
            <button
              key={v.id}
              onClick={() => setActiveView(v.id)}
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1rem',
                fontWeight: '600',
                background: activeView === v.id
                  ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                  : 'rgba(255,255,255,0.05)',
                color: 'white',
                border: activeView === v.id
                  ? '2px solid rgba(139,92,246,0.5)'
                  : '2px solid rgba(255,255,255,0.1)',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-sans)'
              }}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* === SHARDING === */}
        {activeView === 'sharding' && (
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {/* Original DB */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                borderRadius: '12px',
                padding: '1.25rem 3rem',
                color: 'white',
                boxShadow: '0 8px 30px rgba(239,68,68,0.2)',
                border: '2px solid rgba(239,68,68,0.4)'
              }}>
                <div style={{ fontSize: '2rem' }}>🗄️</div>
                <strong style={{ fontSize: '1.1rem' }}>Original DB (10TB)</strong>
                <p style={{ fontSize: '0.75rem', margin: '0.25rem 0 0', opacity: 0.8 }}>
                  Single server — too much data!
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '2rem', margin: '0.75rem 0' }}>
              ↓ Shard by User ID ↓
            </div>

            {/* Shards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.25rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {[
                { name: 'Shard 1', range: 'Users A-F', color: '#3b82f6', size: '2.5TB', icon: '🗄️' },
                { name: 'Shard 2', range: 'Users G-L', color: '#22c55e', size: '2.5TB', icon: '🗄️' },
                { name: 'Shard 3', range: 'Users M-R', color: '#f59e0b', size: '2.5TB', icon: '🗄️' },
                { name: 'Shard 4', range: 'Users S-Z', color: '#8b5cf6', size: '2.5TB', icon: '🗄️' },
              ].map(shard => (
                <div key={shard.name} style={{
                  background: `${shard.color}10`,
                  borderRadius: '12px',
                  padding: '1.5rem',
                  border: `2px solid ${shard.color}30`,
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{shard.icon}</div>
                  <h4 style={{ color: shard.color, fontSize: '1rem', margin: '0 0 0.25rem' }}>{shard.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0 0 0.25rem' }}>{shard.range}</p>
                  <span style={{
                    fontSize: '0.7rem',
                    background: `${shard.color}20`,
                    color: shard.color,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    fontWeight: '600'
                  }}>
                    {shard.size}
                  </span>
                </div>
              ))}
            </div>

            {/* Sharding Strategies */}
            <div style={{
              marginTop: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
              maxWidth: '800px',
              margin: '2.5rem auto 0'
            }}>
              {[
                { title: 'Range-Based', icon: '📏', desc: 'Shard by value range (A-F, G-L). Simple but can cause hotspots.', color: '#3b82f6' },
                { title: 'Hash-Based', icon: '#️⃣', desc: 'Hash the key, mod by shard count. Even distribution, harder resharding.', color: '#22c55e' },
                { title: 'Directory-Based', icon: '📖', desc: 'Lookup table maps keys to shards. Flexible but adds a dependency.', color: '#f59e0b' },
              ].map(strategy => (
                <div key={strategy.title} style={{
                  background: `${strategy.color}08`,
                  borderRadius: '10px',
                  padding: '1.25rem',
                  border: `1px solid ${strategy.color}20`,
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{strategy.icon}</div>
                  <h5 style={{ color: strategy.color, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{strategy.title}</h5>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>{strategy.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === REPLICATION === */}
        {activeView === 'replication' && (
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {/* Master */}
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                borderRadius: '12px',
                padding: '1.5rem 3rem',
                color: 'white',
                boxShadow: '0 8px 30px rgba(245,158,11,0.3)',
                border: '2px solid rgba(245,158,11,0.4)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>👑</div>
                <strong style={{ fontSize: '1.2rem' }}>Primary (Master)</strong>
                <p style={{ fontSize: '0.8rem', margin: '0.25rem 0 0', opacity: 0.8 }}>
                  Handles ALL writes
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem', margin: '0.5rem 0 1rem' }}>
              ↙ Replicates ↓ Data ↘
            </div>

            {/* Replicas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              maxWidth: '750px',
              margin: '0 auto 2rem'
            }}>
              {[
                { name: 'Replica 1', region: '🇺🇸 US-East', color: '#3b82f6' },
                { name: 'Replica 2', region: '🇪🇺 EU-West', color: '#22c55e' },
                { name: 'Replica 3', region: '🇯🇵 Asia-Pacific', color: '#8b5cf6' },
              ].map(replica => (
                <div key={replica.name} style={{
                  background: `${replica.color}10`,
                  borderRadius: '12px',
                  padding: '1.5rem',
                  border: `2px solid ${replica.color}30`,
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📖</div>
                  <h4 style={{ color: replica.color, fontSize: '1rem', margin: '0 0 0.25rem' }}>{replica.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0', margin: '0 0 0.5rem' }}>{replica.region}</p>
                  <span style={{
                    fontSize: '0.7rem',
                    background: `${replica.color}20`,
                    color: replica.color,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontWeight: '600'
                  }}>
                    READ ONLY
                  </span>
                </div>
              ))}
            </div>

            {/* Types */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'rgba(59,130,246,0.08)',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(59,130,246,0.2)'
              }}>
                <h4 style={{ color: '#60a5fa', marginBottom: '0.75rem' }}>🔄 Synchronous Replication</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>
                  <li>• Write confirmed after ALL replicas sync</li>
                  <li>• Strong consistency ✅</li>
                  <li>• Higher latency ⚠️</li>
                  <li>• Used in: banking, payments</li>
                </ul>
              </div>
              <div style={{
                background: 'rgba(34,197,94,0.08)',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(34,197,94,0.2)'
              }}>
                <h4 style={{ color: '#4ade80', marginBottom: '0.75rem' }}>⚡ Asynchronous Replication</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>
                  <li>• Write confirmed immediately</li>
                  <li>• Replicas sync later (lag)</li>
                  <li>• Lower latency ✅</li>
                  <li>• Used in: social media, analytics</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Sharding vs Replication comparison */}
      <section className="section">
        <h2 className="section-title">Sharding vs Replication — Quick Compare</h2>
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'auto'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '0.75rem', color: '#94a3b8', textAlign: 'left' }}>Aspect</th>
                <th style={{ padding: '0.75rem', color: '#3b82f6', textAlign: 'left' }}>🔀 Sharding</th>
                <th style={{ padding: '0.75rem', color: '#22c55e', textAlign: 'left' }}>📋 Replication</th>
              </tr>
            </thead>
            <tbody>
              {[
                { aspect: 'Purpose', shard: 'Distribute data across nodes', rep: 'Copy data to multiple nodes' },
                { aspect: 'Scaling', shard: 'Write & storage scaling', rep: 'Read scaling & availability' },
                { aspect: 'Data', shard: 'Each shard has SUBSET', rep: 'Each replica has FULL copy' },
                { aspect: 'Failure', shard: 'Lose one shard = lose that data', rep: 'Lose one replica = others serve' },
                { aspect: 'Complexity', shard: 'High (resharding, cross-shard queries)', rep: 'Medium (consistency lag)' },
                { aspect: 'Use Case', shard: 'Massive datasets (100TB+)', rep: 'High availability, geo-distribution' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '0.75rem', color: '#e2e8f0', fontWeight: '600' }}>{row.aspect}</td>
                  <td style={{ padding: '0.75rem', color: '#93c5fd' }}>{row.shard}</td>
                  <td style={{ padding: '0.75rem', color: '#86efac' }}>{row.rep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">⚡ Interview Tip</div>
          <p>
            In practice, you often use <strong>both</strong> sharding AND replication together. Each shard 
            can have its own replicas. When an interviewer asks "how would you handle a database with 
            billions of records?", start with <strong>read replicas</strong> (easy win), then discuss 
            <strong> sharding</strong> when a single master can't handle the write load. Always mention 
            the tradeoffs: cross-shard queries, resharding pain, and consistency models.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ShardingReplicationTab
