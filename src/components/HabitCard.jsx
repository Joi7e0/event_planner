import React from 'react';

const HabitCard = ({ habit, onToggle }) => {
    const isDone = habit.completed;

    return (
        <div
            style={{
                ...cardStyles,
                opacity: isDone ? 0.8 : 1,
                borderLeft: isDone ? '4px solid var(--accent)' : '4px solid var(--warning)',
            }}
            onClick={() => onToggle(habit.id)}
        >
            <div style={infoStyles}>
                <h3 style={{
                    ...titleStyles,
                    textDecoration: isDone ? 'line-through' : 'none',
                    color: isDone ? 'var(--text-secondary)' : 'var(--text-primary)',
                }}>
                    {habit.name}
                </h3>
                <div style={metaRow}>
                    <span style={categoryBadge}>{habit.category}</span>
                    <span style={streakStyles}>🔥 {habit.streak} day streak</span>
                </div>
            </div>
            <span
                style={{
                    ...statusBadge,
                    backgroundColor: isDone ? 'rgba(16, 185, 129, 0.15)' : 'rgba(234, 179, 8, 0.15)',
                    color: isDone ? 'var(--accent)' : 'var(--warning)',
                }}
            >
                {isDone ? '✓ Done' : '⏳ Pending'}
            </span>
        </div>
    );
};

const cardStyles = {
    backgroundColor: 'var(--bg-card)',
    padding: 'var(--spacing-md)',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 'var(--spacing-md)',
    transition: 'var(--transition)',
    boxShadow: 'var(--shadow)',
    cursor: 'pointer',
    userSelect: 'none',
};

const infoStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
};

const titleStyles = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
};

const metaRow = {
    display: 'flex',
    gap: 'var(--spacing-sm)',
    alignItems: 'center',
};

const categoryBadge = {
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    padding: '2px 10px',
    borderRadius: '10px',
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    color: 'var(--primary)',
};

const streakStyles = {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
};

const statusBadge = {
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '700',
    whiteSpace: 'nowrap',
    minWidth: '100px',
    textAlign: 'center',
};

export default HabitCard;
