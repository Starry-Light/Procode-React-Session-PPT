function JWTOAuthTab() {
  return (
    <div>
      <section className="section">
        <h2 className="section-title">Authentication & Authorization</h2>
        <p className="section-description">
          Understanding JWT (JSON Web Tokens) and OAuth - the cornerstones of modern web authentication and authorization.
        </p>
      </section>

      {/* JWT Section */}
      <section className="section">
        <h2 className="section-title">🎟️ JWT (JSON Web Token)</h2>
        <div className="concept-card">
          <h3>What is JWT?</h3>
          <p>
            JWT is a compact, URL-safe token format used to securely transmit information between parties. 
            It's commonly used for authentication and information exchange in web applications.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>JWT Structure</h4>
            <div style={{ 
              background: '#1e1e1e', 
              padding: '1.5rem', 
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '0.9rem'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#ff6b6b', marginBottom: '0.5rem' }}>
                  <strong>Header</strong> (Algorithm & Token Type)
                </div>
                <div style={{ color: '#aaa', background: '#2a2a2a', padding: '0.5rem', borderRadius: '4px' }}>
                  {`{"alg": "HS256", "typ": "JWT"}`}
                </div>
                <div style={{ textAlign: 'center', margin: '0.5rem 0', color: '#666' }}>↓ Base64 Encoded</div>
                <div style={{ color: '#ff6b6b', background: '#2a2a2a', padding: '0.5rem', borderRadius: '4px', wordBreak: 'break-all' }}>
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#a855f7', marginBottom: '0.5rem' }}>
                  <strong>Payload</strong> (Claims/Data)
                </div>
                <div style={{ color: '#aaa', background: '#2a2a2a', padding: '0.5rem', borderRadius: '4px' }}>
                  {`{"sub": "1234567890", "name": "John Doe", "iat": 1516239022}`}
                </div>
                <div style={{ textAlign: 'center', margin: '0.5rem 0', color: '#666' }}>↓ Base64 Encoded</div>
                <div style={{ color: '#a855f7', background: '#2a2a2a', padding: '0.5rem', borderRadius: '4px', wordBreak: 'break-all' }}>
                  eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
                </div>
              </div>

              <div>
                <div style={{ color: '#51cf66', marginBottom: '0.5rem' }}>
                  <strong>Signature</strong> (Verification)
                </div>
                <div style={{ color: '#aaa', background: '#2a2a2a', padding: '0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                  HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
                </div>
                <div style={{ textAlign: 'center', margin: '0.5rem 0', color: '#666' }}>↓</div>
                <div style={{ color: '#51cf66', background: '#2a2a2a', padding: '0.5rem', borderRadius: '4px', wordBreak: 'break-all' }}>
                  SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                </div>
              </div>

              <div style={{ 
                marginTop: '1.5rem', 
                padding: '1rem', 
                background: '#2a2a2a', 
                borderRadius: '4px',
                borderLeft: '4px solid #3b82f6'
              }}>
                <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Complete JWT Token:
                </div>
                <div style={{ color: '#ddd', wordBreak: 'break-all', fontSize: '0.8rem' }}>
                  <span style={{ color: '#ff6b6b' }}>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>
                  <span style={{ color: '#666' }}>.</span>
                  <span style={{ color: '#a855f7' }}>eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ</span>
                  <span style={{ color: '#666' }}>.</span>
                  <span style={{ color: '#51cf66' }}>SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="concept-card info" style={{ marginTop: '1.5rem' }}>
          <h3>How JWT Authentication Works</h3>
          <div style={{ 
            display: 'grid', 
            gap: '1rem', 
            marginTop: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
          }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px',
              borderLeft: '4px solid #3b82f6'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>1️⃣</div>
              <strong>User Login</strong>
              <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
                User sends credentials (username/password) to server
              </p>
            </div>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px',
              borderLeft: '4px solid #8b5cf6'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>2️⃣</div>
              <strong>Server Validates</strong>
              <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
                Server verifies credentials and creates a JWT token with user info
              </p>
            </div>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px',
              borderLeft: '4px solid #10b981'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>3️⃣</div>
              <strong>Client Stores Token</strong>
              <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
                Client receives JWT and stores it (localStorage, sessionStorage, or cookie)
              </p>
            </div>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px',
              borderLeft: '4px solid #f59e0b'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>4️⃣</div>
              <strong>Subsequent Requests</strong>
              <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
                Client includes JWT in Authorization header: `Bearer &lt;token&gt;`
              </p>
            </div>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px',
              borderLeft: '4px solid #ef4444'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>5️⃣</div>
              <strong>Server Verifies</strong>
              <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
                Server validates JWT signature and grants access to protected resources
              </p>
            </div>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: '1rem', 
              borderRadius: '8px',
              borderLeft: '4px solid #06b6d4'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>6️⃣</div>
              <strong>Stateless</strong>
              <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
                No session stored on server - token contains all necessary info
              </p>
            </div>
          </div>
        </div>

        <div className="callout tip" style={{ marginTop: '1.5rem' }}>
          <div className="callout-icon">💡</div>
          <div>
            <strong>Key Benefits of JWT:</strong>
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, lineHeight: '1.8' }}>
              <li>Stateless - no server-side session storage needed</li>
              <li>Scalable - works across multiple servers/microservices</li>
              <li>Self-contained - carries all user information</li>
              <li>Cross-domain - can be used across different domains</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OAuth Section */}
      <section className="section">
        <h2 className="section-title">🔐 OAuth 2.0</h2>
        <div className="concept-card">
          <h3>What is OAuth?</h3>
          <p>
            OAuth 2.0 is an authorization framework that enables applications to obtain limited access 
            to user accounts on an HTTP service (like Google, Facebook, GitHub) without exposing user credentials.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>OAuth Roles</h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              <div className="comparison-item good">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👤</div>
                <h4>Resource Owner</h4>
                <p>The user who owns the data (e.g., you on Google)</p>
              </div>
              <div className="comparison-item good">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱</div>
                <h4>Client</h4>
                <p>The application requesting access (e.g., your app)</p>
              </div>
              <div className="comparison-item good">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔒</div>
                <h4>Authorization Server</h4>
                <p>Issues tokens after authentication (e.g., Google Auth)</p>
              </div>
              <div className="comparison-item good">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💾</div>
                <h4>Resource Server</h4>
                <p>Hosts the protected resources (e.g., Google APIs)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="concept-card info" style={{ marginTop: '1.5rem' }}>
          <h3>OAuth 2.0 Flow (Authorization Code)</h3>
          <div style={{ 
            background: '#1e1e1e', 
            padding: '2rem', 
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Step 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  minWidth: '40px', 
                  height: '40px', 
                  background: '#3b82f6', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>1</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem', color: '#3b82f6' }}>
                    User → Client: "Sign in with Google"
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#aaa' }}>
                    User clicks "Login with Google" button in your app
                  </div>
                </div>
              </div>

              <div style={{ borderLeft: '2px solid #444', height: '20px', marginLeft: '20px' }}></div>

              {/* Step 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  minWidth: '40px', 
                  height: '40px', 
                  background: '#8b5cf6', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>2</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem', color: '#8b5cf6' }}>
                    Client → Authorization Server: Redirect to Google Login
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#aaa' }}>
                    App redirects to Google with client_id, redirect_uri, and scope
                  </div>
                </div>
              </div>

              <div style={{ borderLeft: '2px solid #444', height: '20px', marginLeft: '20px' }}></div>

              {/* Step 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  minWidth: '40px', 
                  height: '40px', 
                  background: '#10b981', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>3</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem', color: '#10b981' }}>
                    User → Authorization Server: Login & Grant Permission
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#aaa' }}>
                    User logs in to Google and approves permissions
                  </div>
                </div>
              </div>

              <div style={{ borderLeft: '2px solid #444', height: '20px', marginLeft: '20px' }}></div>

              {/* Step 4 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  minWidth: '40px', 
                  height: '40px', 
                  background: '#f59e0b', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>4</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem', color: '#f59e0b' }}>
                    Authorization Server → Client: Authorization Code
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#aaa' }}>
                    Google redirects back to your app with an authorization code
                  </div>
                </div>
              </div>

              <div style={{ borderLeft: '2px solid #444', height: '20px', marginLeft: '20px' }}></div>

              {/* Step 5 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  minWidth: '40px', 
                  height: '40px', 
                  background: '#ef4444', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>5</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem', color: '#ef4444' }}>
                    Client → Authorization Server: Exchange Code for Token
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#aaa' }}>
                    Your app sends code + client_secret to get access token
                  </div>
                </div>
              </div>

              <div style={{ borderLeft: '2px solid #444', height: '20px', marginLeft: '20px' }}></div>

              {/* Step 6 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  minWidth: '40px', 
                  height: '40px', 
                  background: '#06b6d4', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>6</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem', color: '#06b6d4' }}>
                    Authorization Server → Client: Access Token (+ Refresh Token)
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#aaa' }}>
                    Google returns access token and optionally a refresh token
                  </div>
                </div>
              </div>

              <div style={{ borderLeft: '2px solid #444', height: '20px', marginLeft: '20px' }}></div>

              {/* Step 7 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  minWidth: '40px', 
                  height: '40px', 
                  background: '#ec4899', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>7</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem', color: '#ec4899' }}>
                    Client → Resource Server: Request Data with Access Token
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#aaa' }}>
                    Your app uses token to access user's Google data/APIs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="callout success" style={{ marginTop: '1.5rem' }}>
          <div className="callout-icon">✅</div>
          <div>
            <strong>Why OAuth Matters:</strong>
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, lineHeight: '1.8' }}>
              <li>Users never share passwords with third-party apps</li>
              <li>Granular permissions - apps only get what they need</li>
              <li>Users can revoke access anytime</li>
              <li>Industry standard used by Google, Facebook, GitHub, etc.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section">
        <h2 className="section-title">JWT vs OAuth</h2>
        <div className="comparison-grid">
          <div className="concept-card">
            <h3 style={{ marginBottom: '1rem' }}>🎟️ JWT</h3>
            <div style={{ lineHeight: '1.8' }}>
              <p><strong>Type:</strong> Token format</p>
              <p><strong>Purpose:</strong> Authentication & data exchange</p>
              <p><strong>Use Case:</strong> Stateless API authentication</p>
              <p><strong>Lifespan:</strong> Short-lived (minutes to hours)</p>
              <p><strong>Example:</strong> Login to your own app</p>
            </div>
          </div>
          <div className="concept-card">
            <h3 style={{ marginBottom: '1rem' }}>🔐 OAuth</h3>
            <div style={{ lineHeight: '1.8' }}>
              <p><strong>Type:</strong> Authorization framework</p>
              <p><strong>Purpose:</strong> Delegated authorization</p>
              <p><strong>Use Case:</strong> Third-party access</p>
              <p><strong>Lifespan:</strong> Can be long-lived with refresh</p>
              <p><strong>Example:</strong> "Sign in with Google"</p>
            </div>
          </div>
        </div>

        <div className="key-takeaway" style={{ marginTop: '2rem' }}>
          <div className="key-takeaway-title">🔗 They Work Together!</div>
          <p>
            OAuth 2.0 often uses JWT as the token format for access tokens. So you might use OAuth to 
            authenticate users via Google, and receive a JWT access token that your app then uses for 
            subsequent API calls. They're complementary technologies, not alternatives!
          </p>
        </div>
      </section>
    </div>
  )
}

export default JWTOAuthTab
