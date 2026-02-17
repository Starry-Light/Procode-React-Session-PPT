function WelcomeTab({ onGetStarted }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-background">
        <div className="welcome-gradient"></div>
        <div className="welcome-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${Math.random() * 5}s`,
              '--x': `${Math.random() * 100}%`,
              '--duration': `${15 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="welcome-content">
        <div className="welcome-badge">Interactive Workshop</div>
        
        <div className="welcome-brand">
          <img 
            src="/procodeLogo.png" 
            alt="ProCoDe Logo" 
            className="welcome-logo"
          />
          <h1 className="welcome-title">
            <span className="welcome-highlight">Pro</span>Co<span className="welcome-highlight">De</span>
          </h1>
        </div>
        
        <h2 className="welcome-react-title">
          Learn React 
          <svg className="react-logo" viewBox="-11.5 -10.232 23 20.463" width="50" height="50">
            <circle r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        </h2>
        
        <p className="welcome-subtitle">
          An interactive journey through React fundamentals.
        </p>
        
        <button className="welcome-cta" onClick={onGetStarted}>
          Get Started
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default WelcomeTab
