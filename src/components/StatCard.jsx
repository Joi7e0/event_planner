import React from 'react';
import { useTheme } from '../context/ThemeContext';

const StatCard = ({ label, value, icon }) => {
    const { theme } = useTheme();

    return (
        <div style={{
            ...cardStyles,
            boxShadow: theme === 'dark'
                ? '0 4px 20px rgba(0,0,0,0.4)'
                : '0 2px 12px rgba(0,0,0,0.07)',
            borderTop: `2px solid var(--primary)`,
        }}>
            <span style={iconStyles}>{icon}</span>
            <span style={labelStyles}>{label}</span>
            <span style={{
                ...valueStyles,
                color: theme === 'dark' ? 'var(--text-primary)' : 'var(--primary)',
            }}>{value}</span>
        </div>
    );
};

const cardStyles = {
    backgroundColor: 'var(--bg-card)',
    padding: 'var(--spacing-md)',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--border)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    transition: 'var(--transition)',
};

const iconStyles = {
    fontSize: '1.6rem',
};

const labelStyles = {
    color: 'var(--text-secondary)',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
};

const valueStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
};

export default StatCard;
