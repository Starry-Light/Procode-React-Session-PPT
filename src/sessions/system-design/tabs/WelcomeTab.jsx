function WelcomeTab({ onGetStarted }) {
  return (
    <div className="welcome-screen backend-welcome">
      <div className="welcome-background">
        <div className="welcome-gradient"></div>
        <div className="welcome-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                "--delay": `${Math.random() * 5}s`,
                "--x": `${Math.random() * 100}%`,
                "--duration": `${15 + Math.random() * 10}s`,
              }}></div>
          ))}
        </div>
      </div>

      <div className="welcome-content">
        <div className="welcome-badge">Interactive Workshop</div>

        <div className="welcome-brand">
          <img src="/procodeLogo.png" alt="ProCoDe Logo" className="welcome-logo" />
          <h1 className="welcome-title">
            <span className="welcome-highlight">Pro</span>Co<span className="welcome-highlight">De</span>
          </h1>
        </div>

        <h2 className="backend-welcome-react-title">
          System Design 101 🏗️
        </h2>

        <p className="welcome-subtitle">
          Master the fundamental building blocks of scalable, reliable systems — 
          from databases to distributed architectures. Get interview-ready!
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          {['SQL vs NoSQL', '2-Tier vs 3-Tier', 'Microservices', 'Event-Driven', 'Sharding', 'CAP & ACID', 'CDN'].map(topic => (
            <span key={topic} style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '500'
            }}>
              {topic}
            </span>
          ))}
        </div>

        <button className="welcome-cta" onClick={onGetStarted}>
          Get Started
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default WelcomeTab
