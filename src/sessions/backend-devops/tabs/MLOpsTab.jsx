import CodeBlock from '../components/CodeBlock'

function MLOpsTab() {
  return (
    <div>
      <section className="section">
        <h2 className="section-title">🤖 Introduction to MLOps</h2>
        <p className="section-description">
          Bringing machine learning models from notebooks to production.
        </p>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="concept-card">
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.8' }}>
            <strong>MLOps (Machine Learning Operations)</strong> is the practice of operationalizing machine learning systems so that models can be <strong>trained, versioned, deployed, monitored, and updated reliably</strong> in production.
          </p>

          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            padding: '2rem',
            borderRadius: '12px',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            marginBottom: '2rem'
          }}>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              While model development happens in notebooks and scripts,<br />real-world systems require:
            </h3>
            <div style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
            }}>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#6ee7b7'
              }}>
                Reproducibility
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#6ee7b7'
              }}>
                Version Control
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#6ee7b7'
              }}>
                Automated Deployment
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#6ee7b7'
              }}>
                Scalable Inference
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#6ee7b7'
              }}>
                Training/Serving Separation
              </div>
            </div>
          </div>

          <p style={{
            fontSize: '1.375rem',
            fontStyle: 'italic',
            textAlign: 'center',
            padding: '1.5rem',
            background: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '12px',
            color: '#c4b5fd',
            fontWeight: '600'
          }}>
            MLOps bridges the gap between experimentation and production.
          </p>
        </div>
      </section>

      {/* How MLOps Works */}
      <section className="section">
        <h2 className="section-title">How MLOps Works in Practice</h2>
        <div className="concept-card">
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', textAlign: 'center' }}>
            In production environments, machine learning systems are split into <strong>distinct stages</strong>:
          </p>

          <div style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
              padding: '2rem',
              borderRadius: '12px',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h3 style={{ fontSize: '1.375rem', marginBottom: '1.25rem', color: '#93c5fd' }}>1. Training</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Data preprocessing
                </div>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Model training and evaluation
                </div>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Artifact generation (model files)
                </div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))',
              padding: '2rem',
              borderRadius: '12px',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
              <h3 style={{ fontSize: '1.375rem', marginBottom: '1.25rem', color: '#6ee7b7' }}>2. Model Packaging</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Exporting in standard format
                </div>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Assigning versions to models
                </div>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Storing in model registry
                </div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.05))',
              padding: '2rem',
              borderRadius: '12px',
              border: '2px solid rgba(168, 85, 247, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.375rem', marginBottom: '1.25rem', color: '#c4b5fd' }}>3. Model Serving</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(168, 85, 247, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Loading into inference service
                </div>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(168, 85, 247, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Exposing prediction APIs
                </div>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(168, 85, 247, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Scaling independently
                </div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.05))',
              padding: '2rem',
              borderRadius: '12px',
              border: '2px solid rgba(249, 115, 22, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
              <h3 style={{ fontSize: '1.375rem', marginBottom: '1.25rem', color: '#fbbf24' }}>4. Consumption</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(249, 115, 22, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Backend services call model API
                </div>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(249, 115, 22, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  No ML framework dependencies
                </div>
                <div style={{
                  padding: '0.875rem',
                  background: 'rgba(249, 115, 22, 0.1)',
                  borderRadius: '6px',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Applications stay lightweight
                </div>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '12px',
            border: '2px solid rgba(16, 185, 129, 0.3)',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.25rem', color: '#6ee7b7', fontWeight: '600', margin: 0 }}>
              This separation enables teams to update models <strong>without redeploying applications</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Model Serving */}
      <section className="section">
        <h2 className="section-title">Model Serving in an MLOps Pipeline</h2>
        <div className="concept-card">
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'center' }}>
            Model serving is handled by <strong>specialized serving systems</strong>,<br />not by application servers.
          </p>

          <div style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              padding: '1.5rem',
              borderRadius: '10px',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>⚡</div>
              <strong style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>Fast startup and inference latency</strong>
            </div>
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              padding: '1.5rem',
              borderRadius: '10px',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🏷️</div>
              <strong style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>Versioned models</strong>
            </div>
            <div style={{
              background: 'rgba(168, 85, 247, 0.1)',
              padding: '1.5rem',
              borderRadius: '10px',
              border: '2px solid rgba(168, 85, 247, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔧</div>
              <strong style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>Framework-native support</strong>
            </div>
            <div style={{
              background: 'rgba(249, 115, 22, 0.1)',
              padding: '1.5rem',
              borderRadius: '10px',
              border: '2px solid rgba(249, 115, 22, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🐳</div>
              <strong style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>Containerized deployment</strong>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.15))',
            padding: '2rem',
            borderRadius: '12px',
            border: '2px solid rgba(59, 130, 246, 0.4)',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.375rem', margin: 0, fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>
              For TensorFlow-based models, this role is fulfilled by <span style={{ color: '#ff6f00' }}>TensorFlow Serving</span>.
            </p>
          </div>
        </div>
      </section>

      {/* TensorFlow Serving */}
      <section className="section">
        <h2 className="section-title">Serving TensorFlow Models</h2>
        <div className="concept-card">
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 111, 0, 0.1), rgba(255, 111, 0, 0.05))',
            padding: '2rem',
            borderRadius: '12px',
            border: '2px solid rgba(255, 111, 0, 0.3)',
            marginBottom: '2rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center', color: '#fbbf24' }}>
              TensorFlow Serving
            </h3>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
              A production-ready serving system built specifically for <strong>TensorFlow models</strong>.<br />
              It loads models exported in the <strong>SavedModel</strong> format and exposes them via HTTP or gRPC APIs.
            </p>
            <div style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'
            }}>
              <div style={{
                background: 'rgba(255, 111, 0, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                borderLeft: '4px solid #ff6f00',
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.9)'
              }}>
                Supports <strong>only TensorFlow models</strong>
              </div>
              <div style={{
                background: 'rgba(255, 111, 0, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                borderLeft: '4px solid #ff6f00',
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.9)'
              }}>
                Requires versioned model directories
              </div>
              <div style={{
                background: 'rgba(255, 111, 0, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                borderLeft: '4px solid #ff6f00',
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.9)'
              }}>
                Designed for containerized deployment
              </div>
              <div style={{
                background: 'rgba(255, 111, 0, 0.1)',
                padding: '1.25rem',
                borderRadius: '8px',
                borderLeft: '4px solid #ff6f00',
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.9)'
              }}>
                Widely used in production MLOps
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training and Export */}
      <section className="section">
        <h2 className="section-title">Model Training and Export</h2>
        <div className="concept-card">
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            The following example demonstrates a minimal training workflow and exports the model in a format compatible with TensorFlow Serving.
          </p>

          <CodeBlock language="python" code={`import tensorflow as tf
import numpy as np
import os

# Sample training data
x = np.array([[1.0], [2.0], [3.0], [4.0]], dtype=float)
y = np.array([[3.0], [5.0], [7.0], [9.0]], dtype=float)

# Define model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(1, input_shape=[1])
])

model.compile(optimizer='sgd', loss='mean_squared_error')

# Train
model.fit(x, y, epochs=500, verbose=0)

# Export as SavedModel
export_path = "my_model/1"
if os.path.exists(export_path):
    import shutil
    shutil.rmtree(export_path)

model.export(export_path)
print("Model exported to:", export_path)`} />

          <div style={{
            marginTop: '1.5rem',
            padding: '1.25rem',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '8px',
            border: '2px solid rgba(59, 130, 246, 0.3)'
          }}>
            <p style={{ fontSize: '1.125rem', margin: 0, color: 'rgba(255,255,255,0.9)' }}>
              <strong>Note:</strong> The directory structure <code style={{ background: 'rgba(0,0,0,0.2)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>model_name/version/</code> enables <strong>model versioning</strong>, a core MLOps requirement.
            </p>
          </div>
        </div>
      </section>

      {/* Docker Deployment */}
      <section className="section">
        <h2 className="section-title">Deploying the Model Using Docker</h2>
        <div className="concept-card">
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            In real-world setups, model servers run inside containers for consistency and portability.
          </p>

          <CodeBlock language="bash" code={`docker run -p 8501:8501 \\
  --mount type=bind,source="\${PWD}/my_model",target=/models/my_model \\
  -e MODEL_NAME=my_model \\
  tensorflow/serving`} />

          <div style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '10px',
            border: '2px solid rgba(16, 185, 129, 0.3)',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.25rem', margin: 0, color: '#6ee7b7', fontWeight: '600' }}>
              This starts a TensorFlow Serving instance exposing a prediction API on port <strong>8501</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* API Predictions */}
      <section className="section">
        <h2 className="section-title">Requesting Predictions</h2>
        <div className="concept-card">
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            Applications interact with the model through an API, not through TensorFlow code.
          </p>

          <CodeBlock language="bash" code={`curl -X POST http://localhost:8501/v1/models/my_model:predict \\
  -H "Content-Type: application/json" \\
  -d '{"instances": [[5.0]]}'`} />

          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15))',
            borderRadius: '12px',
            border: '3px solid rgba(139, 92, 246, 0.4)',
            textAlign: 'center',
            boxShadow: '0 10px 40px rgba(139, 92, 246, 0.2)'
          }}>
            <p style={{ fontSize: '1.375rem', lineHeight: '1.8', margin: 0, fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>
              This decouples ML frameworks from application logic,<br />
              allowing models to <span style={{ color: '#c4b5fd' }}>evolve independently</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MLOpsTab
