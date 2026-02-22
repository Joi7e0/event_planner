import React from 'react';

const History = ({ logs }) => {
    if (logs.length === 0) {
        return (
            <div style={emptyStyles}>
                <p>Your history is empty. Complete your first habit to see it here! 🎯</p>
            </div>
        );
    }

    return (
        <div style={historyList}>
            {logs.map((log) => (
                <div key={log.id} style={logItem}>
                    <div style={logInfo}>
                        <span style={habitName}>{log.habitName}</span>
                        <span style={logMeta}>{log.date} at {log.time}</span>
                    </div>
                    <span style={statusBadge}>Completed</span>
                </div>
            ))}
        </div>
    );
};

const historyList = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-md)',
};

const logItem = {
    backgroundColor: 'var(--bg-card)',
    padding: 'var(--spacing-md)',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    animation: 'fadeIn 0.5s ease',
};

const logInfo = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
};

const habitName = {
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

const emptyStyles = {
    textAlign: 'center',
    padding: 'var(--spacing-lg)',
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius)',
    border: '1px dashed var(--border)',
    color: 'var(--text-secondary)',
};

export default History;
