import React from 'react';

const HistoryItem = ({ log }) => {
    return (
        <div style={itemStyles}>
            <div style={logInfo}>
                <span style={habitNameStyles}>{log.habitName}</span>
                <span style={logMeta}>{log.date} at {log.time}</span>
            </div>
            <span style={statusBadge}>Completed</span>
        </div>
    );
};

const itemStyles = {
    backgroundColor: 'var(--bg-card)',
    padding: 'var(--spacing-md)',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const logInfo = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
};

const habitNameStyles = {
    fontWeight: '600',
    color: 'var(--text-primary)',
};

const logMeta = {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
};

const statusBadge = {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    color: 'var(--accent)',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
};

export default HistoryItem;
