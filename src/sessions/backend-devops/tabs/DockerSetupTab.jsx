import CodeBlock from '../components/CodeBlock'

function DockerSetupTab() {
  return (
    <div>
      <section className="section">
        <h2 className="section-title">🛠️ Docker Setup & First Hands-On</h2>
        <p className="section-description">
          Get Docker running and deploy your first container.
        </p>
      </section>

      {/* Prerequisites */}
      <section className="section">
        <h2 className="section-title">What You Need Before Starting</h2>
        <div className="concept-card">
          <div style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
          }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #3b82f6'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💻</div>
              <strong>A laptop</strong><br />
              Linux / macOS / Windows
            </div>
            <div style={{
              background: 'rgba(139, 92, 246, 0.1)',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #8b5cf6'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⌨️</div>
              <strong>Terminal access</strong><br />
              Command line ready
            </div>
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #10b981'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🌐</div>
              <strong>Internet connection</strong><br />
              For downloading images
            </div>
            <div style={{
              background: 'rgba(245, 158, 11, 0.1)',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #f59e0b'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🚀</div>
              <strong>Zero prior knowledge</strong><br />
              We'll learn together 😉
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="section">
        <h2 className="section-title">Installing Docker</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>🐧 Linux</h3>
          <CodeBlock language="bash" code={`sudo apt update
sudo apt install docker.io
sudo systemctl start docker`} />
        </div>

        <div className="concept-card">
          <h3>macOS / Windows</h3>
          <ul style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            <li>Install <strong>Docker Desktop</strong></li>
            <li>Start Docker from Applications</li>
          </ul>
        </div>
      </section>

      {/* Verify Installation */}
      <section className="section">
        <h2 className="section-title">Verify Installation</h2>
        <div className="concept-card">
          <CodeBlock language="bash" code={`docker --version
# Output: Docker version 24.0.0, build 12345`} />
          <p style={{ color: '#10b981', fontWeight: 'bold' }}>
            If Docker responds — you're ready 🚀
          </p>
        </div>
      </section>

      {/* First Command */}
      <section className="section">
        <h2 className="section-title">Your First Docker Command</h2>
        <div className="concept-card">
          <CodeBlock language="bash" code={`docker run hello-world`} />

          <h3 style={{ marginBottom: '1rem' }}>What just happened?</h3>
          <ul style={{ fontSize: '1.125rem', lineHeight: '2' }}>
            <li>📦 Docker <strong>downloaded</strong> an image</li>
            <li>🏗️ <strong>Created</strong> a container</li>
            <li>⚙️ <strong>Ran</strong> it</li>
            <li>🧹 <strong>Cleaned up</strong> after itself</li>
          </ul>
          <p style={{ marginTop: '1.5rem', color: '#10b981', fontWeight: 'bold' }}>
            No setup. No config. ✨
          </p>
        </div>
      </section>

      {/* Three Concepts */}
      <section className="section">
        <h2 className="section-title">Three Docker Concepts (That's It)</h2>
        <div style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          marginBottom: '2rem'
        }}>
          <div className="concept-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1️⃣ Image</h3>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              A <strong>blueprint</strong>
            </p>
            <p style={{ fontSize: '0.95rem', color: '#999' }}>
              Read-only template containing everything your app needs
            </p>
          </div>

          <div className="concept-card info">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2️⃣ Container</h3>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              A <strong>running instance</strong> of an image
            </p>
            <p style={{ fontSize: '0.95rem', color: '#999' }}>
              Isolated environment where your app actually executes
            </p>
          </div>

          <div className="concept-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3️⃣ Dockerfile</h3>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              A <strong>recipe</strong> to build an image
            </p>
            <p style={{ fontSize: '0.95rem', color: '#999' }}>
              Set of instructions that defines how to package your app
            </p>
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          padding: '1.5rem',
          borderRadius: '12px',
          color: 'white',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.125rem', margin: 0 }}>
            <strong>Understand these three, and Docker makes sense.</strong>
          </p>
        </div>
      </section>

      {/* Running Without Installing */}
      <section className="section">
        <h2 className="section-title">Running an App Without Installing Anything</h2>
        <div className="concept-card">
          <CodeBlock language="bash" code={`docker run -p 3000:3000 node:18`} />

          <h3 style={{ marginBottom: '1rem' }}>Questions to ask yourself:</h3>
          <div style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              background: 'rgba(255, 107, 107, 0.1)',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #ff6b6b'
            }}>
              <strong>Where did Node come from?</strong>
            </div>
            <div style={{
              background: 'rgba(255, 107, 107, 0.1)',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #ff6b6b'
            }}>
              <strong>Did we install it locally?</strong>
            </div>
            <div style={{
              background: 'rgba(255, 107, 107, 0.1)',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #ff6b6b'
            }}>
              <strong>Why does this work instantly?</strong>
            </div>
          </div>

          <p style={{ color: '#10b981', fontWeight: 'bold' }}>
            That's Docker doing the heavy lifting. 💪
          </p>
        </div>
      </section>

      {/* Building Your Own Image */}
      <section className="section">
        <h2 className="section-title">Building Your Own Docker Image</h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
          Let's create a simple Node.js app and containerize it.
        </p>

        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Sample App (app.js)</h3>
        <CodeBlock 
          language="javascript" 
          showLineNumbers={true}
          code={`const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from inside a container 🚢");
}).listen(3000);`} 
        />
      </section>

      {/* The Dockerfile */}
      <section className="section">
        <h2 className="section-title">The Dockerfile (The Recipe)</h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
          Read it top to bottom like instructions. Each line has a purpose.
        </p>

        <CodeBlock 
          language="dockerfile" 
          showLineNumbers={true}
          code={`FROM node:18
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]`} 
        />

        <div style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'rgba(206, 126, 27, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            borderLeft: '4px solid #ce7e1b'
          }}>
            <strong>FROM node:18</strong><br />
            <span style={{ fontSize: '0.9rem', color: '#999' }}>Start with Node.js v18 base image</span>
          </div>
          <div style={{
            background: 'rgba(206, 126, 27, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            borderLeft: '4px solid #ce7e1b'
          }}>
            <strong>WORKDIR /app</strong><br />
            <span style={{ fontSize: '0.9rem', color: '#999' }}>Set working directory</span>
          </div>
          <div style={{
            background: 'rgba(206, 126, 27, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            borderLeft: '4px solid #ce7e1b'
          }}>
            <strong>COPY . .</strong><br />
            <span style={{ fontSize: '0.9rem', color: '#999' }}>Copy your files into container</span>
          </div>
          <div style={{
            background: 'rgba(206, 126, 27, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            borderLeft: '4px solid #ce7e1b'
          }}>
            <strong>EXPOSE 3000</strong><br />
            <span style={{ fontSize: '0.9rem', color: '#999' }}>Container listens on port 3000</span>
          </div>
          <div style={{
            background: 'rgba(206, 126, 27, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            borderLeft: '4px solid #ce7e1b'
          }}>
            <strong>CMD ["node", "app.js"]</strong><br />
            <span style={{ fontSize: '0.9rem', color: '#999' }}>Default command to run</span>
          </div>
        </div>
      </section>

      {/* Build the Image */}
      <section className="section">
        <h2 className="section-title">Build the Image</h2>
        <div className="concept-card">
          <CodeBlock language="bash" code={`docker build -t my-first-image .`} />
          <p style={{ fontSize: '1.125rem' }}>
            This creates your own <strong>reusable Docker image</strong>.
          </p>
          <p style={{ color: '#999', marginTop: '1rem' }}>
            The <code style={{ background: '#2a2a2a', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>.</code> tells Docker to look in the current directory for the Dockerfile.
          </p>
        </div>
      </section>

      {/* Run the Container */}
      <section className="section">
        <h2 className="section-title">Run the Container</h2>
        <div className="concept-card info">
          <CodeBlock language="bash" code={`docker run -p 3000:3000 my-first-image`} />

          <ul style={{ fontSize: '1.125rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li>🌐 Open browser → <code style={{ background: '#2a2a2a', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>localhost:3000</code></li>
            <li>✅ Your app is now running <strong>inside a container</strong></li>
          </ul>

          <p style={{ 
            background: 'rgba(16, 185, 129, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            borderLeft: '4px solid #10b981',
            fontStyle: 'italic',
            marginTop: '1rem'
          }}>
            Congratulations! You just containerized your first app. 🎉
          </p>
        </div>
      </section>
    </div>
  )
}

export default DockerSetupTab
