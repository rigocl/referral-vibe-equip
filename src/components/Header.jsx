import { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo and Brand */}
        <div className="header-brand">
          <div className="logo">
            <img 
              className="logo-icon" 
              src="https://cdn.brandfetch.io/idF4FmGrYk/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1754135438300" 
              alt="Equip Health Logo"
              width="32"
              height="32"
            />
            <span className="logo-text">Equip</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Providers</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Support</a>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="btn-secondary">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li><a href="#" className="mobile-nav-link">Home</a></li>
              <li><a href="#" className="mobile-nav-link">Services</a></li>
              <li><a href="#" className="mobile-nav-link">Providers</a></li>
              <li><a href="#" className="mobile-nav-link">Support</a></li>
            </ul>
            <div className="mobile-actions">
              <button className="btn-secondary mobile-btn">Sign In</button>
              <button className="btn-primary mobile-btn">Get Started</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;