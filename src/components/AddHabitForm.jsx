import React, { useState, useRef } from 'react';
import { useSettings } from '../context/SettingsContext';
import { Button, Input } from './ui';

const AddHabitForm = ({ onAdd }) => {
    const { t } = useSettings();
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
                <Input
                    ref={inputRef}
                    type="text"
                    placeholder={t('habitPlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ flex: '1', minWidth: '200px' }}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={selectStyles}
                >
                    <option value="Health">{t('catHealth')}</option>
                    <option value="Fitness">{t('catFitness')}</option>
                    <option value="Learning">{t('catLearning')}</option>
                    <option value="Mindfulness">{t('catMindfulness')}</option>
                    <option value="Work">{t('catWork')}</option>
                </select>
                <Button type="submit" variant="primary" size="md">
                    {t('addHabitBtn')}
                </Button>
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
    alignItems: 'flex-end',
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
    minHeight: '38px',
};

export default AddHabitForm;
