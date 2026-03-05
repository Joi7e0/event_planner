import React from 'react';
import HistoryItem from './HistoryItem';

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
                <HistoryItem key={log.id} log={log} />
            ))}
        </div>
    );
};

const historyList = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-md)',
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
