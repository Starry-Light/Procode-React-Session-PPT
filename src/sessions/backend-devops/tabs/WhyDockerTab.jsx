function WhyDockerTab() {
  return (
    <div>
      <section className="section">
        <h2 className="section-title">🐳 Why Docker?</h2>
      </section>

      {/* The Problem Section */}
      <section className="section">
        <h2 className="section-title">The Problem We All Face</h2>
        
        <div style={{ 
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div className="concept-card" style={{ flex: '1 1 400px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
              "It works on my machine."
            </h3>
            <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Yet somehow:
            </p>
            <div style={{ 
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                borderLeft: '4px solid #ef4444',
                textAlign: 'center'
              }}>
                Your friend can't run it
              </div>
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                borderLeft: '4px solid #ef4444',
                textAlign: 'center'
              }}>
                The server breaks
              </div>
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                borderLeft: '4px solid #ef4444',
                textAlign: 'center'
              }}>
                Versions don't match
              </div>
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                borderLeft: '4px solid #ef4444',
                textAlign: 'center'
              }}>
                Setup takes hours
              </div>
            </div>
            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#ff6b6b', textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 107, 107, 0.05)', borderRadius: '8px' }}>
              <strong>Same code. Different results.</strong><br />
              That's not a skill issue — it's an <strong>environment</strong> issue.
            </p>
          </div>

          <div style={{ 
            flex: '0 0 auto',
            textAlign: 'center'
          }}>
            <img 
              src="https://media.makeameme.org/created/works-on-my-5bc45d.jpg" 
              alt="Works on my machine meme"
              style={{ 
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Why This Happens */}
      <section className="section">
        <h2 className="section-title">Why This Keeps Happening</h2>
        <div className="concept-card">
          <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem', textAlign: 'center' }}>
            Every app depends on:
          </p>
          <div style={{ 
            display: 'grid', 
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              background: 'rgba(255, 107, 107, 0.08)', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '2px solid rgba(255, 107, 107, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🐍</div>
              <strong style={{ fontSize: '1.125rem' }}>Programming Language Runtime</strong>
            </div>
            <div style={{ 
              background: 'rgba(139, 92, 246, 0.08)', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '2px solid rgba(139, 92, 246, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📦</div>
              <strong style={{ fontSize: '1.125rem' }}>Libraries & System Packages</strong>
            </div>
            <div style={{ 
              background: 'rgba(16, 185, 129, 0.08)', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '2px solid rgba(16, 185, 129, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚙️</div>
              <strong style={{ fontSize: '1.125rem' }}>OS-level Configurations</strong>
            </div>
          </div>
          <p style={{ color: '#999', textAlign: 'center', fontSize: '1.125rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
            When <strong>any</strong> of these differ between machines, things break.
          </p>
        </div>
      </section>

      {/* Virtual Machines Section */}
      <section className="section">
        <h2 className="section-title">The Old Solution: Virtual Machines (VMs)</h2>
        <div className="concept-card">
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div>
              <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>What VMs do:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ 
                  padding: '1rem', 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  borderRadius: '8px',
                  borderLeft: '4px solid #10b981'
                }}>
                  Bundle the app
                </div>
                <div style={{ 
                  padding: '1rem', 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  borderRadius: '8px',
                  borderLeft: '4px solid #10b981'
                }}>
                  Bundle dependencies
                </div>
                <div style={{ 
                  padding: '1rem', 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  borderRadius: '8px',
                  borderLeft: '4px solid #10b981'
                }}>
                  Bundle an <strong>entire OS</strong>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Problems:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ 
                  padding: '1rem', 
                  background: 'rgba(239, 68, 68, 0.1)', 
                  borderRadius: '8px',
                  borderLeft: '4px solid #ef4444'
                }}>
                  Heavy (GBs)
                </div>
                <div style={{ 
                  padding: '1rem', 
                  background: 'rgba(239, 68, 68, 0.1)', 
                  borderRadius: '8px',
                  borderLeft: '4px solid #ef4444'
                }}>
                  Slow to start
                </div>
                <div style={{ 
                  padding: '1rem', 
                  background: 'rgba(239, 68, 68, 0.1)', 
                  borderRadius: '8px',
                  borderLeft: '4px solid #ef4444'
                }}>
                  Hard to manage at scale
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docker Solution Section */}
      <section className="section">
        <h2 className="section-title">The Modern Solution: Containers</h2>
        
        <div style={{ 
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <img 
            src="https://miro.medium.com/0*7ezJOtYUkI5zyqWU.png" 
            alt="Docker logo and concept"
            style={{ 
              maxWidth: '600px',
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        <div className="concept-card info">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>Enter Docker 🐳</h3>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Docker lets you package:
          </p>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            <div style={{
              padding: '1rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '8px',
              borderLeft: '4px solid #10b981',
              fontSize: '1.125rem'
            }}>
              ✓ Your app
            </div>
            <div style={{
              padding: '1rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '8px',
              borderLeft: '4px solid #10b981',
              fontSize: '1.125rem'
            }}>
              ✓ Its dependencies
            </div>
            <div style={{
              padding: '1rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '8px',
              borderLeft: '4px solid #10b981',
              fontSize: '1.125rem'
            }}>
              ✓ Its runtime
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', color: '#10b981', fontWeight: 'bold', textAlign: 'center', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px' }}>
            <strong>Without</strong> bundling the entire OS.
          </p>
        </div>
      </section>

      {/* Container Definition */}
      <section className="section">
        <h2 className="section-title">Containers in One Line</h2>
        <div style={{ 
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          padding: '2.5rem',
          borderRadius: '16px',
          color: 'white',
          textAlign: 'center',
          marginBottom: '2rem',
          boxShadow: '0 8px 30px rgba(59, 130, 246, 0.3)'
        }}>
          <p style={{ fontSize: '1.5rem', margin: 0, lineHeight: '1.6' }}>
            <strong>A container is a lightweight, portable box<br />that runs the same way everywhere.</strong>
          </p>
        </div>
        <div className="concept-card">
          <p style={{ fontSize: '1.25rem', lineHeight: '2', textAlign: 'center' }}>
            Laptop. Lab PC. Cloud server.
            <br />
            <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.5rem' }}>Same behavior. Same result.</span>
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section">
        <h2 className="section-title">Container vs Virtual Machine</h2>
        
        <div style={{ 
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          marginBottom: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <img 
              src="https://www.researchgate.net/publication/369061128/figure/fig2/AS:11431281125201275@1678232029210/Docker-Container-vs-Virtual-Machine.png" 
              alt="Docker Container vs Virtual Machine"
              style={{ 
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                marginBottom: '1rem'
              }}
            />
          </div>
        </div>

        <div className="concept-card">
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: 0,
              fontSize: '1.05rem'
            }}>
              <thead>
                <tr>
                  <th style={{ 
                    padding: '1.25rem', 
                    textAlign: 'left', 
                    fontWeight: 'bold',
                    background: 'rgba(239, 68, 68, 0.1)',
                    borderBottom: '3px solid #ef4444',
                    borderTopLeftRadius: '8px'
                  }}>
                    Virtual Machine
                  </th>
                  <th style={{ 
                    padding: '1.25rem', 
                    textAlign: 'left', 
                    fontWeight: 'bold', 
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderBottom: '3px solid #10b981',
                    borderTopRightRadius: '8px'
                  }}>
                    Container
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                  <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>
                    Full OS per app
                  </td>
                  <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600', color: '#10b981' }}>
                    Shares host OS
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>
                    Heavy & slow
                  </td>
                  <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600', color: '#10b981' }}>
                    Lightweight & fast
                  </td>
                </tr>
                <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                  <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>
                    GBs in size
                  </td>
                  <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600', color: '#10b981' }}>
                    MBs in size
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    Hard to scale
                  </td>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: '600', color: '#10b981' }}>
                    Easy to scale
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Lunchbox Analogy */}
      <section className="section">
        <h2 className="section-title">The Core Docker Idea</h2>
        <div className="concept-card">
          <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>🥡 The Lunchbox Analogy</h3>
          <div style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            marginBottom: '2.5rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.05))',
              padding: '2rem',
              borderRadius: '12px',
              border: '2px solid rgba(255, 193, 7, 0.3)',
              textAlign: 'center',
              transition: 'transform 0.2s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🍱</div>
              <strong style={{ fontSize: '1.125rem' }}>App</strong> = Food
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05))',
              padding: '2rem',
              borderRadius: '12px',
              border: '2px solid rgba(76, 175, 80, 0.3)',
              textAlign: 'center',
              transition: 'transform 0.2s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥗</div>
              <strong style={{ fontSize: '1.125rem' }}>Libraries</strong> = Side dishes
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05))',
              padding: '2rem',
              borderRadius: '12px',
              border: '2px solid rgba(33, 150, 243, 0.3)',
              textAlign: 'center',
              transition: 'transform 0.2s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥄</div>
              <strong style={{ fontSize: '1.125rem' }}>Runtime</strong> = Spoon
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.1), rgba(233, 30, 99, 0.05))',
              padding: '2rem',
              borderRadius: '12px',
              border: '2px solid rgba(233, 30, 99, 0.3)',
              textAlign: 'center',
              transition: 'transform 0.2s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠</div>
              <strong style={{ fontSize: '1.125rem' }}>OS kernel</strong> = Shared kitchen
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', textAlign: 'center', padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', lineHeight: '1.8' }}>
            Everyone uses the <strong>same kitchen</strong>, but their <strong>own lunchbox</strong>.
          </p>
        </div>
      </section>

      {/* What Docker Gives You */}
      <section className="section">
        <h2 className="section-title">What Docker Actually Gives You</h2>
        <div style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          marginBottom: '2rem'
        }}>
          <div className="concept-card" style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, 0.02))',
            border: '2px solid rgba(239, 68, 68, 0.2)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ef4444' }}>Removes</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{
                padding: '0.875rem',
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '6px',
                fontSize: '1.05rem',
                color: '#1f2937'
              }}>
                "Setup works only on my laptop"
              </div>
              <div style={{
                padding: '0.875rem',
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '6px',
                fontSize: '1.05rem',
                color: '#1f2937'
              }}>
                Version mismatch issues
              </div>
              <div style={{
                padding: '0.875rem',
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '6px',
                fontSize: '1.05rem',
                color: '#1f2937'
              }}>
                Long onboarding times
              </div>
              <div style={{
                padding: '0.875rem',
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '6px',
                fontSize: '1.05rem',
                color: '#1f2937'
              }}>
                Environment-related bugs
              </div>
            </div>
          </div>
          
          <div className="concept-card info" style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02))',
            border: '2px solid rgba(16, 185, 129, 0.2)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#10b981' }}>Adds</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{
                padding: '0.875rem',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '6px',
                fontSize: '1.05rem',
                fontWeight: '600',
                color: '#065f46'
              }}>
                ✓ Consistency
              </div>
              <div style={{
                padding: '0.875rem',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '6px',
                fontSize: '1.05rem',
                fontWeight: '600',
                color: '#065f46'
              }}>
                ✓ Portability
              </div>
              <div style={{
                padding: '0.875rem',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '6px',
                fontSize: '1.05rem',
                fontWeight: '600',
                color: '#065f46'
              }}>
                ✓ Confidence
              </div>
              <div style={{
                padding: '0.875rem',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '6px',
                fontSize: '1.05rem',
                fontWeight: '600',
                color: '#065f46'
              }}>
                ✓ Scalability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real World Usage */}
      <section className="section">
        <h2 className="section-title">Real World Docker Usage</h2>
        <div style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          marginBottom: '2rem'
        }}>
          <div className="concept-card" style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💻</div>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', color: '#1e40af' }}>Development</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#1f2937' }}>
              Local dev environment setup without complex installations
            </p>
          </div>

          <div className="concept-card" style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))',
            border: '2px solid rgba(16, 185, 129, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🧪</div>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', color: '#065f46' }}>Testing</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#1f2937' }}>
              Spin up isolated test environments quickly and reliably
            </p>
          </div>

          <div className="concept-card" style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.05))',
            border: '2px solid rgba(168, 85, 247, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', color: '#6b21a8' }}>CI/CD Pipelines</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#1f2937' }}>
              Build, test, and deploy in consistent containerized environments
            </p>
          </div>

          <div className="concept-card" style={{
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.05))',
            border: '2px solid rgba(249, 115, 22, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>☁️</div>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', color: '#c2410c' }}>Cloud Deployment</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#1f2937' }}>
              Deploy to AWS, Azure, GCP with guaranteed consistency
            </p>
          </div>

          <div className="concept-card" style={{
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05))',
            border: '2px solid rgba(236, 72, 153, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🏗️</div>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', color: '#9f1239' }}>Microservices</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#1f2937' }}>
              Each service runs in its own container with specific dependencies
            </p>
          </div>

          <div className="concept-card" style={{
            background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(234, 179, 8, 0.05))',
            border: '2px solid rgba(234, 179, 8, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>👥</div>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', color: '#a16207' }}>Team Onboarding</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#1f2937' }}>
              New developers get started with a single command
            </p>
          </div>
        </div>

        {/* <div className="concept-card" style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))',
          border: '3px solid rgba(139, 92, 246, 0.4)',
          padding: '2.5rem',
          textAlign: 'center',
          boxShadow: '0 10px 40px rgba(139, 92, 246, 0.2)'
        }}>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>Big tech companies like Netflix, Uber, Spotify, and Airbnb</strong> use Docker to manage thousands of services.
          </p>
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
            It's not just a tool—it's an industry standard.
          </p>
        </div> */}
      </section>
    </div>
  )
}

export default WhyDockerTab
