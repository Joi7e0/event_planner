import React from 'react';
import '../styles/variables.css';

const Header = ({ title, titleAccent, subtitle, completedCount, currentView, onViewChange }) => {
    return (
        <header style={headerStyles}>
            <div style={containerStyles}>
                <div>
                    <h1 style={logoStyles}>
                        ✨ {title}<span style={accentStyles}>{titleAccent}</span>
                    </h1>
                    <p style={subtitleStyles}>{subtitle}</p>
                </div>
                <div style={actionArea}>
                    <div style={badgeContainer}>
                        <span style={badgeLabel}>Today's Progress</span>
                        <span style={badgeValue}>{completedCount} Done</span>
                    </div>
                    <nav>
                        <ul style={navListStyles}>
                            <li
                                style={{
                                    ...navItemStyle,
                                    color: currentView === 'dashboard' ? 'var(--primary)' : 'var(--text-secondary)',
                                    borderBottom: currentView === 'dashboard' ? '2px solid var(--primary)' : '2px solid transparent',
                                }}
                                onClick={() => onViewChange('dashboard')}
                            >
                                Dashboard
                            </li>
                            <li
                                style={{
                                    ...navItemStyle,
                                    color: currentView === 'history' ? 'var(--primary)' : 'var(--text-secondary)',
                                    borderBottom: currentView === 'history' ? '2px solid var(--primary)' : '2px solid transparent',
                                }}
                                onClick={() => onViewChange('history')}
                            >
                                History
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

const actionArea = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-lg)',
};

const badgeContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '4px 12px',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(99, 102, 241, 0.2)',
};

const badgeLabel = {
    fontSize: '0.65rem',
    fontWeight: '700',
    color: 'var(--primary)',
    textTransform: 'uppercase',
};

const badgeValue = {
    fontSize: '0.9rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
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
    cursor: 'pointer',
    transition: 'var(--transition)',
};

export default Header;
