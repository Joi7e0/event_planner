import React from 'react';
import '../styles/variables.css';

const Header = ({ title, titleAccent, subtitle }) => {
    return (
        <header style={headerStyles}>
            <div style={containerStyles}>
                <div>
                    <h1 style={logoStyles}>
                        ✨ {title}<span style={accentStyles}>{titleAccent}</span>
                    </h1>
                    <p style={subtitleStyles}>{subtitle}</p>
                </div>
                <nav>
                    <ul style={navListStyles}>
                        <li style={navItemStyle}>Dashboard</li>
                        <li style={navItemStyle}>History</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const headerStyles = {
    backgroundColor: 'var(--bg-card)',
    padding: 'var(--spacing-md) 0',
    borderBottom: '1px solid var(--border)',
    boxShadow: 'var(--shadow)',
};

const containerStyles = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 var(--spacing-lg)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const logoStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
};

const accentStyles = {
    color: 'var(--primary)',
};

const subtitleStyles = {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginTop: '2px',
};

const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: 'var(--spacing-lg)',
};

const navItemStyle = {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    fontWeight: '600',
    padding: 'var(--spacing-sm) 0',
    borderBottom: '2px solid transparent',
    cursor: 'default',
};

export default Header;
