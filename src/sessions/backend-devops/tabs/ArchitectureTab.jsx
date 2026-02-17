import { useState } from 'react'

function ArchitectureTab() {
  const [layerStep, setLayerStep] = useState(0)

  const nextLayer = () => {
    if (layerStep < 3) {
      setLayerStep(layerStep + 1)
    }
  }

  const reset = () => {
    setLayerStep(0)
  }

  return (
    <div>
      <section className="section">
        <h2 className="section-title">Building Modern Application Architecture</h2>
        <p className="section-description">
          Watch how a simple three-tier architecture evolves into a robust, scalable system. 
          Click the button to progressively add layers!
        </p>
      </section>

      <section className="section">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
          <button
            onClick={nextLayer}
            disabled={layerStep >= 3}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: layerStep >= 3 ? '#ccc' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: layerStep >= 3 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              fontFamily: 'var(--font-sans)'
            }}
          >
            {layerStep === 0 && '➕ Add API Gateway'}
            {layerStep === 1 && '➕ Add Blob Storage'}
            {layerStep === 2 && '➕ Add ML Model Hosting'}
            {layerStep === 3 && '✓ Architecture Complete'}
          </button>
          <button
            onClick={reset}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--text-primary)',
              border: '2px solid var(--border)',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-sans)'
            }}
          >
            🔄 Reset
          </button>
        </div>

        {/* Architecture Diagram */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '12px',
          padding: '3rem 2rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Frontend */}
          <div style={{
            width: '100%',
            maxWidth: '400px',
            animation: 'fadeIn 0.5s ease'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              color: 'white',
              boxShadow: '0 8px 30px rgba(59, 130, 246, 0.3)',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🌐</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Frontend</h3>
              <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>
                React, Vue, Angular
              </p>
              <p style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.5rem' }}>
                User Interface
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ fontSize: '2rem', color: 'rgba(255, 255, 255, 0.3)' }}>↓</div>

          {/* API Gateway Layer */}
          {layerStep >= 1 && (
            <>
              <div style={{
                width: '100%',
                maxWidth: '400px',
                animation: 'slideInFromBottom 0.5s ease'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                  color: 'white',
                  boxShadow: '0 8px 30px rgba(239, 68, 68, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-0.75rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#ef4444',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    border: '2px solid rgba(255, 255, 255, 0.3)'
                  }}>
                    GATEWAY
                  </div>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚦</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>API Gateway</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>
                    Kong, AWS API Gateway, Azure APIM
                  </p>
                  <p style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.5rem' }}>
                    Rate limiting, auth, monitoring
                  </p>
                </div>
              </div>
              <div style={{ fontSize: '2rem', color: 'rgba(255, 255, 255, 0.3)' }}>↓</div>
            </>
          )}

          {/* Backend Services Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: layerStep >= 2 ? 'repeat(2, 1fr)' : '1fr',
            gap: '2rem',
            width: '100%',
            maxWidth: '900px',
            animation: layerStep >= 2 ? 'expandGrid 0.5s ease' : 'none'
          }}>
            {/* Backend */}
            <div style={{
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              color: 'white',
              boxShadow: '0 8px 30px rgba(139, 92, 246, 0.3)',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>⚙️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Backend</h3>
              <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>
                Node.js, Python, Java
              </p>
              <p style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.5rem' }}>
                Business Logic & APIs
              </p>
            </div>

            {/* Blob Storage */}
            {layerStep >= 2 && (
              <div style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                color: 'white',
                boxShadow: '0 8px 30px rgba(245, 158, 11, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                animation: 'slideInFromRight 0.5s ease'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📦</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Blob Storage</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>
                  AWS S3, Azure Blob
                </p>
                <p style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.5rem' }}>
                  Files, images, videos
                </p>
              </div>
            )}
          </div>

          {/* Arrow to Data Layer */}
          <div style={{ fontSize: '2rem', color: 'rgba(255, 255, 255, 0.3)' }}>↓</div>

          {/* Data Layer */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: layerStep >= 3 ? 'repeat(2, 1fr)' : '1fr',
            gap: '2rem',
            width: '100%',
            maxWidth: '900px',
            animation: layerStep >= 3 ? 'expandGrid 0.5s ease' : 'none'
          }}>
            {/* Database */}
            <div style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              color: 'white',
              boxShadow: '0 8px 30px rgba(16, 185, 129, 0.3)',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💾</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Database</h3>
              <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>
                PostgreSQL, MongoDB
              </p>
              <p style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.5rem' }}>
                Data Persistence
              </p>
            </div>

            {/* ML Model Hosting */}
            {layerStep >= 3 && (
              <div style={{
                background: 'linear-gradient(135deg, #ec4899, #db2777)',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                color: 'white',
                boxShadow: '0 8px 30px rgba(236, 72, 153, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                animation: 'slideInFromRight 0.5s ease'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🤖</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>ML Models</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>
                  TensorFlow Serving
                </p>
                <p style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.5rem' }}>
                  Model inference at scale
                </p>
              </div>
            )}
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInFromBottom {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes expandGrid {
            from {
              opacity: 0.5;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </section>

      {/* Layer Descriptions */}
      <section className="section">
        <h2 className="section-title">Understanding Each Layer</h2>
        
        <div className="concept-card" style={{ marginBottom: '1.5rem' }}>
          <h3>🌐 Frontend Layer</h3>
          <p>
            The presentation layer that users interact with directly. Built with modern frameworks 
            like React, Vue, or Angular. Handles UI rendering, user input, and communicates with the backend via APIs.
          </p>
        </div>

        <div className="concept-card" style={{ marginBottom: '1.5rem' }}>
          <h3>⚙️ Backend Layer</h3>
          <p>
            The application logic layer that processes requests, enforces business rules, and orchestrates 
            data flow. Built with Node.js, Python (Django/Flask), Java (Spring), or other server-side technologies.
          </p>
        </div>

        <div className="concept-card" style={{ marginBottom: '1.5rem' }}>
          <h3>💾 Database Layer</h3>
          <p>
            Persistent storage for structured data. Can be relational (PostgreSQL, MySQL) or 
            NoSQL (MongoDB, DynamoDB). Handles CRUD operations and data consistency.
          </p>
        </div>

        {layerStep >= 1 && (
          <div className="concept-card" style={{ marginBottom: '1.5rem', animation: 'fadeIn 0.5s ease' }}>
            <h3>🚦 API Gateway Layer</h3>
            <p>
              A gateway that sits between frontend and backend services. Acts as a single entry point 
              for all client requests. Provides rate limiting, authentication, caching, request/response 
              transformation, monitoring, and API versioning. Essential for microservices architectures 
              and public APIs. Routes requests to appropriate backend services.
            </p>
          </div>
        )}

        {layerStep >= 2 && (
          <div className="concept-card" style={{ marginBottom: '1.5rem', animation: 'fadeIn 0.5s ease' }}>
            <h3>📦 Blob Storage Layer</h3>
            <p>
              Object storage for unstructured data like images, videos, backups, and static files. 
              Highly scalable and cost-effective for large files. Examples: AWS S3, Azure Blob Storage, 
              Google Cloud Storage. Often used with CDNs for fast delivery. Backend services can read/write 
              to blob storage independently.
            </p>
          </div>
        )}

        {layerStep >= 3 && (
          <div className="concept-card" style={{ marginBottom: '1.5rem', animation: 'fadeIn 0.5s ease' }}>
            <h3>🤖 ML Model Hosting Layer</h3>
            <p>
              Infrastructure for serving machine learning models in production. TensorFlow Serving 
              provides a flexible, high-performance serving system for ML models. Handles versioning, 
              A/B testing, and real-time inference at scale. Can be deployed on Kubernetes, AWS SageMaker, 
              Azure ML, or Google AI Platform. Backend calls ML models for predictions and inference.
            </p>
          </div>
        )}
      </section>

      {layerStep === 3 && (
        <section className="section">
          <div className="key-takeaway">
            <div className="key-takeaway-title">🎯 Complete Architecture</div>
            <p>
              You've built a modern, production-ready architecture! This setup supports scalability, 
              microservices, content delivery, ML capabilities, and robust API management. Each layer 
              can be scaled independently based on demand, and the system is resilient to failures.
            </p>
          </div>

          <div className="callout success" style={{ marginTop: '1.5rem' }}>
            <div className="callout-icon">✨</div>
            <div>
              <strong>Real-World Examples:</strong>
              <ul style={{ marginTop: '0.5rem', marginBottom: 0, lineHeight: '1.8' }}>
                <li><strong>Netflix:</strong> Uses microservices, API gateways, and ML for recommendations</li>
                <li><strong>Uber:</strong> Real-time ML models for routing and pricing</li>
                <li><strong>Instagram:</strong> Massive blob storage for images, CDN distribution</li>
                <li><strong>Spotify:</strong> API management for third-party integrations, ML for discovery</li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ArchitectureTab
