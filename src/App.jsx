import { Routes, Route } from 'react-router-dom'
import SessionMenu from './components/SessionMenu'
import ReactSessionApp from './sessions/react/ReactSessionApp'
import BackendDevOpsSessionApp from './sessions/backend-devops/BackendDevOpsSessionApp'
import SystemDesignSessionApp from './sessions/system-design/SystemDesignSessionApp'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SessionMenu />} />
      <Route path="/react" element={<ReactSessionApp />} />
      <Route path="/backend-devops" element={<BackendDevOpsSessionApp />} />
      <Route path="/system-design" element={<SystemDesignSessionApp />} />
    </Routes>
  )
}

export default App
