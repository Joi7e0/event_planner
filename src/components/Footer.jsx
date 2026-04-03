import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';

const Footer = ({ stats }) => {
    const { theme } = useTheme();
    const { t } = useSettings();
    const isReadyForRest = stats?.completed === stats?.total && stats?.total > 0;

    return (
        <footer style={{
            ...footerStyles,
            backgroundColor: theme === 'dark' ? 'var(--bg-card)' : 'var(--bg-card)',
            borderTop: '1px solid var(--border)',
        }}>
            <div style={containerStyles}>
                <div style={statsContainer}>
                    <p style={textStyles}>
                        {t('footerCopy')}
                        {stats && (
                            <span style={{
                                marginLeft: '12px',
                                color: isReadyForRest ? 'var(--accent)' : 'var(--text-secondary)',
                                fontWeight: isReadyForRest ? '700' : '400',
                            }}>
                                {isReadyForRest
                                    ? t('dayCompleted')
                                    : `${t('progress')}: ${stats.completed}/${stats.total} ${t('habitsDone')}`}
                            </span>
                        )}
                    </p>
                </div>
                <div style={linksStyles}>
                    <span style={linkStyles}>{t('privacy')}</span>
                    <span style={linkStyles}>{t('terms')}</span>
                    {/* Theme badge */}
                    <span style={{
                        ...themeBadgeStyles,
                        backgroundColor: theme === 'dark'
                            ? 'rgba(99, 102, 241, 0.15)'
                            : 'rgba(79, 70, 229, 0.1)',
                        color: 'var(--primary)',
                    }}>
                        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
                    </span>
                </div>
            </div>
        </footer>
    );
};

const statsContainer = {
    flex: '1',
};

const footerStyles = {
    marginTop: 'auto',
    padding: 'var(--spacing-lg) 0',
};

const containerStyles = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 var(--spacing-lg)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--spacing-md)',
};

const textStyles = {
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
};

const linksStyles = {
    display: 'flex',
    gap: 'var(--spacing-md)',
    alignItems: 'center',
};

const linkStyles = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.85rem',
    cursor: 'pointer',
};

const themeBadgeStyles = {
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '3px 10px',
    borderRadius: '12px',
};

export default Footer;
