import React from 'react';
import HabitCard from './HabitCard';

const HabitList = ({ habits, onToggle, onDelete }) => {
    if (habits.length === 0) {
        return (
            <div style={emptyStyles}>
                <p>No habits added yet. Start your journey today! 🚀</p>
            </div>
        );
    }

    return (
        <div style={listStyles}>
            {habits.map((habit) => (
                <HabitCard
                    key={habit.id}
                    habit={habit}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

const listStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
};

const emptyStyles = {
    textAlign: 'center',
    padding: 'var(--spacing-lg)',
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius)',
    border: '1px dashed var(--border)',
    color: 'var(--text-secondary)',
};

export default HabitList;
