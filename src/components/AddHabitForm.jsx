import React, { useState, useRef } from 'react';

const AddHabitForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Health');
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        onAdd({
            name,
            category,
            streak: 0,
            completed: false,
        });

        setName('');
        setCategory('Health');
        inputRef.current?.focus();
    };

    return (
        <form onSubmit={handleSubmit} style={formStyles}>
            <div style={inputGroup}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="E.g. Drink Water, Exercise..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyles}
                    required
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={selectStyles}
                >
                    <option value="Health">Health</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Learning">Learning</option>
                    <option value="Mindfulness">Mindfulness</option>
                    <option value="Work">Work</option>
                </select>
                <button type="submit" style={buttonStyles}>Add Habit</button>
            </div>
        </form>
    );
};

const formStyles = {
    marginBottom: 'var(--spacing-lg)',
    backgroundColor: 'var(--bg-card)',
    padding: 'var(--spacing-md)',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow)',
};

const inputGroup = {
    display: 'flex',
    gap: 'var(--spacing-sm)',
    flexWrap: 'wrap',
};

const inputStyles = {
    flex: '1',
    minWidth: '200px',
    padding: '10px 16px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg-main)',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'var(--transition)',
};

const selectStyles = {
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg-main)',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    cursor: 'pointer',
    outline: 'none',
};

const buttonStyles = {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'var(--primary)',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'var(--transition)',
};

export default AddHabitForm;
