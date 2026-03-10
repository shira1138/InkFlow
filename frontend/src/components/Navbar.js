import React from 'react';
import '../styles/Navbar.css';

function Navbar({ onNewDocument, onBackToHome, showBack }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>📝 InkFlow</h1>
      </div>
      <div className="navbar-right">
        {showBack && (
          <button className="btn-back" onClick={onBackToHome}>
            ← Back to Documents
          </button>
        )}
        <button className="btn-new" onClick={onNewDocument}>
          + New Document
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
