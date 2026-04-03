import './Header.css'

interface HeaderProps {
  isConnected: boolean
}

function Header({ isConnected }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">RF</span>
          <span className="logo-text">RealityForge</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="connection-status">
          <span className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}></span>
          <span className="status-text">{isConnected ? 'Connected' : 'Connecting...'}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
