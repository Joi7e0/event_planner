import React from 'react';

const HabitCard = ({ habit, onToggle, onDelete }) => {
    return (
        <div style={cardStyles}>
            <div style={infoStyles}>
                <h3 style={titleStyles}>{habit.name}</h3>
                <p style={streakStyles}>🔥 {habit.streak} day streak</p>
            </div>
            <div style={actionsStyles}>
                <button
                    onClick={() => onToggle(habit.id)}
                    style={{
                        ...buttonBase,
                        backgroundColor: habit.completed ? 'var(--accent)' : 'transparent',
                        borderColor: habit.completed ? 'var(--accent)' : 'var(--border)',
                        color: habit.completed ? '#fff' : 'var(--text-secondary)',
                    }}
                >
                    {habit.completed ? '✓ Done' : 'Mark Done'}
                </button>
                <button
                    onClick={() => onDelete(habit.id)}
                    style={deleteButtonStyles}
                >
                    🗑️
                </button>
            </div>
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
};

const infoStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
};

const titleStyles = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
};

const streakStyles = {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
};

const actionsStyles = {
    display: 'flex',
    gap: 'var(--spacing-sm)',
    alignItems: 'center',
};

const buttonBase = {
    padding: '6px 16px',
    borderRadius: '20px',
    border: '1px solid',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: '600',
    transition: 'var(--transition)',
};

const deleteButtonStyles = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '4px',
    borderRadius: 'var(--radius)',
    transition: 'var(--transition)',
    opacity: 0.6,
};

export default HabitCard;
