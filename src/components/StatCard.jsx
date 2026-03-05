import React from 'react';

const StatCard = ({ label, value, icon }) => {
    return (
        <div style={cardStyles}>
            <span style={iconStyles}>{icon}</span>
            <span style={labelStyles}>{label}</span>
            <span style={valueStyles}>{value}</span>
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
    boxShadow: 'var(--shadow)',
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
    color: 'var(--text-primary)',
};

export default StatCard;
