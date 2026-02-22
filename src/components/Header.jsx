import React from 'react';
import '../styles/variables.css';

const Header = ({ activeTab, onTabChange }) => {
    return (
        <header style={headerStyles}>
            <div style={containerStyles}>
                <h1 style={logoStyles}>✨ Habit<span style={accentStyles}>Tracker</span></h1>
                <nav>
                    <ul style={navListStyles}>
                        <li>
                            <button
                                onClick={() => onTabChange('dashboard')}
                                style={{
                                    ...navButtonStyle,
                                    color: activeTab === 'dashboard' ? 'var(--primary)' : 'var(--text-secondary)',
                                    borderBottom: activeTab === 'dashboard' ? '2px solid var(--primary)' : '2px solid transparent',
                                }}
                            >
                                Dashboard
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => onTabChange('history')}
                                style={{
                                    ...navButtonStyle,
                                    color: activeTab === 'history' ? 'var(--primary)' : 'var(--text-secondary)',
                                    borderBottom: activeTab === 'history' ? '2px solid var(--primary)' : '2px solid transparent',
                                }}
                            >
                                History
                            </button>
                        </li>
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

const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: 'var(--spacing-lg)',
};

const navButtonStyle = {
    background: 'none',
    border: 'none',
    padding: 'var(--spacing-sm) 0',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'var(--transition)',
    outline: 'none',
};

export default Header;
