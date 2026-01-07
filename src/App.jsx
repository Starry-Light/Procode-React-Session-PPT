import { useState } from 'react'
import TabNavigation from './components/TabNavigation'
import SetupTab from './tabs/SetupTab'
import WhyReactTab from './tabs/WhyReactTab'
import JSXComponentsTab from './tabs/JSXComponentsTab'
import PropsTab from './tabs/PropsTab'
import StateTab from './tabs/StateTab'
import LogicControlTab from './tabs/LogicControlTab'
import EffectsTab from './tabs/EffectsTab'
import './App.css'

const tabs = [
  { id: 'setup', label: 'Setup', component: SetupTab },
  { id: 'why', label: 'The "Why"', component: WhyReactTab },
  { id: 'jsx', label: 'JSX & Components', component: JSXComponentsTab },
  { id: 'props', label: 'Props & Composition', component: PropsTab },
  { id: 'state', label: 'State', component: StateTab },
  { id: 'logic', label: 'Logic & Control', component: LogicControlTab },
  { id: 'effects', label: 'Effects', component: EffectsTab },
]

function App() {
  const [activeTab, setActiveTab] = useState('setup')

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || SetupTab

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Learn React ⚛️</h1>
        <p className="app-subtitle">An interactive journey through React fundamentals</p>
      </header>

      <TabNavigation 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      <main className="tab-content">
        <ActiveComponent />
      </main>
    </div>
  )
}

export default App
