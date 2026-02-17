function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <nav className="tab-navigation">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''} ${tab.isWelcome ? 'welcome-tab-btn' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.isWelcome ? (
            <span className="tab-icon">🏠</span>
          ) : (
            <span className="tab-number">{index}</span>
          )}
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

export default TabNavigation
