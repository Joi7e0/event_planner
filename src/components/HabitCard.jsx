import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import { Card, Button } from './ui';

const HabitCard = ({ habit, onToggle }) => {
    const isDone = habit.completed;
    const { theme } = useTheme();
    const { t } = useSettings();

    const cardFooter = (
        <>
            <span
                style={{
                    ...statusBadge,
                    backgroundColor: isDone
                        ? 'var(--color-success-subtle)'
                        : 'var(--color-warning-subtle)',
                    color: isDone ? 'var(--color-success)' : 'var(--color-warning)',
                }}
            >
                {isDone ? t('statusDone') : t('statusPending')}
            </span>

            <Link
                to={`/habit/${habit.id}`}
                style={readMoreStyle}
                onClick={(e) => e.stopPropagation()}
            >
                <Button variant="secondary" size="sm">
                    {t('readMore')}
                </Button>
            </Link>
        </>
    );

    return (
        <Card
            footer={cardFooter}
            style={{
                opacity: isDone ? 0.85 : 1,
                borderLeft: isDone
                    ? '4px solid var(--color-success)'
                    : '4px solid var(--color-warning)',
                boxShadow: theme === 'dark'
                    ? '0 4px 16px rgba(0,0,0,0.35)'
                    : '0 2px 10px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                userSelect: 'none',
                marginBottom: 'var(--spacing-md)',
                transition: 'var(--transition)',
            }}
            onClick={() => onToggle(habit.id)}
        >
            {/* ── Card body content ── */}
            <div style={infoStyles}>
                <h3
                    style={{
                        ...titleStyles,
                        textDecoration: isDone ? 'line-through' : 'none',
                        color: isDone
                            ? 'var(--color-text-secondary)'
                            : 'var(--color-text)',
                    }}
                >
                    {habit.name}
                </h3>
                <div style={metaRow}>
                    <span style={categoryBadge}>{habit.category}</span>
                    <span style={streakStyles}>
                        🔥 {habit.streak} {t('dayStreak')}
                    </span>
                </div>
            </div>
        </Card>
    );
};

/* ── Styles ── */
const infoStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
};

const titleStyles = {
    fontSize: '1.1rem',
    fontWeight: '600',
};

const metaRow = {
    display: 'flex',
    gap: 'var(--space-2)',
    alignItems: 'center',
};

const categoryBadge = {
    fontSize: 'var(--font-size-xs)',
    fontWeight: 'var(--font-weight-bold)',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    padding: '2px 10px',
    borderRadius: 'var(--radius-full)',
    backgroundColor: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)',
};

const streakStyles = {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
};

const statusBadge = {
    padding: '4px 14px',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 'var(--font-weight-bold)',
    whiteSpace: 'nowrap',
    minWidth: '90px',
    textAlign: 'center',
};

const readMoreStyle = {
    textDecoration: 'none',
};

export default HabitCard;
