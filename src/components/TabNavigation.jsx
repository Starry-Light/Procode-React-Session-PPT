function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <nav className="tab-navigation">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="tab-number">{index + 1}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

export default TabNavigation
