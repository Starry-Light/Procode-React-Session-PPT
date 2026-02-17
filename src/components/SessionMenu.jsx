function SessionMenu({ onSessionSelect }) {
  const sessions = [
    {
      id: 'react',
      title: 'React Fundamentals',
      icon: '⚛️',
      description: 'Learn React from scratch - components, props, state, and more',
      color: '#61dafb'
    },
    {
      id: 'backend-devops',
      title: 'Deployment 101',
      icon: '',
      description: 'Understand backend systems, servers, and deployment workflows',
      color: '#00d084'
    },
    {
      id: 'system-design',
      title: 'System Design 101',
      icon: '🏗️',
      description: 'Master databases, architectures, CAP theorem, CDNs & more — get interview ready!',
      color: '#8b5cf6'
    }
  ]

  return (
    <div className="session-menu-screen">
      <div className="session-background">
        <div className="session-gradient"></div>
        <div className="session-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${Math.random() * 5}s`,
              '--x': `${Math.random() * 100}%`,
              '--duration': `${15 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="session-content">
        <div className="session-header">
          <div className="session-brand">
            <img 
              src="/procodeLogo.png" 
              alt="ProCoDe Logo" 
              className="session-logo"
            />
            <h1 className="session-main-title">
              <span className="session-highlight">Pro</span>Co<span className="session-highlight">De</span>
            </h1>
          </div>
          
          <h2 className="session-subtitle">Interactive Learning Sessions</h2>
          <p className="session-description">
            Choose a session to begin your journey
          </p>
        </div>

        <div className="session-cards">
          {sessions.map((session) => (
            <div 
              key={session.id} 
              className="session-card"
              onClick={() => onSessionSelect(session.id)}
              style={{ '--session-color': session.color }}
            >
              <div className="session-card-icon">{session.icon}</div>
              <h3 className="session-card-title">{session.title}</h3>
              <p className="session-card-description">{session.description}</p>
              <button className="session-card-button">
                Start Learning
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SessionMenu
