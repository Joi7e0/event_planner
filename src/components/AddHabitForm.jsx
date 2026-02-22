import React, { useState } from 'react';

const AddHabitForm = ({ onAdd }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        onAdd(name);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit} style={formStyles}>
            <input
                type="text"
                placeholder="Enter a new habit (e.g., Read 30 mins)..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyles}
            />
            <button type="submit" style={buttonStyles}>
                + Add Habit
            </button>
        </form>
    );
};

const formStyles = {
    display: 'flex',
    gap: 'var(--spacing-md)',
    marginBottom: 'var(--spacing-lg)',
};

const inputStyles = {
    flex: 1,
    padding: 'var(--spacing-md)',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg-card)',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'var(--transition)',
};

const buttonStyles = {
    padding: '0 var(--spacing-lg)',
    borderRadius: 'var(--radius)',
    border: 'none',
    backgroundColor: 'var(--primary)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition)',
    whiteSpace: 'nowrap',
};

export default AddHabitForm;
