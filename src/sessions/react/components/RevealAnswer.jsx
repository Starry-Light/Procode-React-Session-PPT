import { useState } from 'react'

function RevealAnswer({ buttonText = 'Reveal Solution', children }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="reveal-container">
      <button 
        className="reveal-button" 
        onClick={() => setRevealed(!revealed)}
      >
        {revealed ? '🔼 Hide' : '🔽 ' + buttonText}
      </button>
      {revealed && (
        <div className="reveal-content">
          {children}
        </div>
      )}
    </div>
  )
}

export default RevealAnswer
