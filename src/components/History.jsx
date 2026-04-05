import React from 'react';
import HistoryItem from './HistoryItem';
import { useSettings } from '../context/SettingsContext';

const History = ({ logs }) => {
    const { t } = useSettings();

    if (logs.length === 0) {
        return (
            <div style={emptyStyles}>
                <p>{t('emptyHistory')}</p>
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
