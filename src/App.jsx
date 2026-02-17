import { useState } from 'react'
import SessionMenu from './components/SessionMenu'
import ReactSessionApp from './sessions/react/ReactSessionApp'
import BackendDevOpsSessionApp from './sessions/backend-devops/BackendDevOpsSessionApp'
import SystemDesignSessionApp from './sessions/system-design/SystemDesignSessionApp'
import './App.css'

function App() {
  const [activeSession, setActiveSession] = useState(null)

  const handleSessionSelect = (sessionId) => {
    setActiveSession(sessionId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToMenu = () => {
    setActiveSession(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!activeSession) {
    return <SessionMenu onSessionSelect={handleSessionSelect} />
  }

  if (activeSession === 'react') {
    return <ReactSessionApp onBackToMenu={handleBackToMenu} />
  }

  if (activeSession === 'backend-devops') {
    return <BackendDevOpsSessionApp onBackToMenu={handleBackToMenu} />
  }

  if (activeSession === 'system-design') {
    return <SystemDesignSessionApp onBackToMenu={handleBackToMenu} />
  }

  return null
}

export default App
