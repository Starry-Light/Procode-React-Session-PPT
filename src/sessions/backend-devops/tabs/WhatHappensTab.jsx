function WhatHappensTab() {
  return (
    <div>
      <section className="section">
        <h2 className="section-title">What Happens When You Type google.com in Your Browser?</h2>
        <p className="section-description">
          A seemingly simple action triggers a complex chain of events. Here's what happens:
        </p>
      </section>

      <section className="section">
        <div className="concept-card">
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            fontSize: '1.125rem',
            lineHeight: '2'
          }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🔍</span>
              <div>
                <strong>DNS Lookup:</strong> Your browser translates "google.com" into an IP address by querying DNS servers (browser cache → OS cache → router → ISP → root servers → authoritative nameservers)
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🤝</span>
              <div>
                <strong>TCP Three-Way Handshake:</strong> Your browser establishes a reliable connection with Google's server (SYN → SYN-ACK → ACK)
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🔒</span>
              <div>
                <strong>TLS/SSL Handshake:</strong> A secure encrypted channel is created through certificate exchange and key generation for HTTPS communication
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📤</span>
              <div>
                <strong>HTTP Request:</strong> Your browser sends a GET request with headers containing browser info, cookies, and accepted content types
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>⚙️</span>
              <div>
                <strong>Server Processing:</strong> The request travels through load balancers, web servers, application servers, and databases to generate the response
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📥</span>
              <div>
                <strong>HTTP Response:</strong> Google's server sends back HTML, CSS, JavaScript, and other assets with appropriate headers and status codes
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🎨</span>
              <div>
                <strong>Browser Rendering:</strong> The browser parses HTML/CSS, constructs the DOM and CSSOM, calculates layout, and paints pixels to the screen
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>⚡</span>
              <div>
                <strong>JavaScript Execution:</strong> Scripts are downloaded, parsed, compiled, and executed to add interactivity and dynamic behavior
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Visual Diagrams */}
      <section className="section">
        <h2 className="section-title">Visual Overview</h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div style={{ 
            background: 'var(--bg-secondary)', 
            padding: '1.5rem', 
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Complete URL Request Flow</h3>
            <img 
              src="/url_in_browser.png" 
              alt="URL Request Flow"
              style={{ 
                width: '100%', 
                maxWidth: '1000px',
                height: 'auto',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          <div style={{ 
            background: 'var(--bg-secondary)', 
            padding: '1.5rem', 
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>DNS Server Types & Hierarchy</h3>
            <img 
              src="/cloudns-dns-server-types.png" 
              alt="DNS Server Types"
              style={{ 
                width: '100%', 
                maxWidth: '1000px',
                height: 'auto',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="section">
        <div className="key-takeaway">
          <div className="key-takeaway-title">⚡ The Big Picture</div>
          <p>
            All of this happens in just a few hundred milliseconds! Modern web infrastructure 
            combines DNS, TCP/IP, TLS, HTTP, and browser rendering engines to deliver content 
            securely and efficiently across the globe.
          </p>
        </div>
      </section>
    </div>
  )
}

export default WhatHappensTab
