import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/variables.css';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';

const Header = ({ title, titleAccent, subtitle, completedCount }) => {
    const { theme, toggleTheme } = useTheme();
    const { t, language, changeLanguage, LANGUAGES } = useSettings();

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
                    {/* Language switcher */}
                    <div style={langSwitcherStyles}>
                        {Object.entries(LANGUAGES).map(([code, meta]) => (
                            <button
                                key={code}
                                id={`lang-btn-${code}`}
                                onClick={() => changeLanguage(code)}
                                style={{
                                    ...langBtnStyle,
                                    backgroundColor: language === code
                                        ? 'rgba(99, 102, 241, 0.2)'
                                        : 'transparent',
                                    color: language === code
                                        ? 'var(--primary)'
                                        : 'var(--text-secondary)',
                                    borderColor: language === code
                                        ? 'var(--primary)'
                                        : 'var(--border)',
                                }}
                                aria-label={`Switch to ${meta.label}`}
                                title={meta.label}
                            >
                                {meta.flag} {code.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Today's progress badge */}
                    <div style={badgeContainer}>
                        <span style={badgeLabel}>{t('todayProgress')}</span>
                        <span style={badgeValue}>{completedCount} {t('done')}</span>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="nav-list" style={navListStyles}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    {t('dashboard')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/habits" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    {t('habits')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/history" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    {t('history')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    {t('inspiration')}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* Theme toggle */}
                    <button
                        id="theme-toggle-btn"
                        onClick={toggleTheme}
                        style={themeToggleStyle}
                        aria-label="Toggle Theme"
                        title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
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

const langSwitcherStyles = {
    display: 'flex',
    gap: '4px',
};

const langBtnStyle = {
    border: '1px solid',
    borderRadius: '6px',
    padding: '3px 8px',
    fontSize: '0.72rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition)',
    fontFamily: 'var(--font-main)',
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
    maxWidth: '1200px',
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
    margin: 0,
    padding: 0,
};

const themeToggleStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'var(--transition)',
    color: 'var(--text-primary)',
};

export default Header;
