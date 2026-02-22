import React from 'react';

const Stats = ({ totalHabits, completedToday, bestStreak, totalCompletedCount }) => {
    return (
        <div style={statsContainer}>
            <div style={statItem}>
                <span style={statLabel}>Completed Today</span>
                <span style={statValue}>{completedToday} / {totalHabits}</span>
            </div>
            <div style={statItem}>
                <span style={statLabel}>Best Streak</span>
                <span style={statValue}>🔥 {bestStreak} Days</span>
            </div>
            <div style={statItem}>
                <span style={statLabel}>Total Completions</span>
                <span style={statValue}>🏆 {totalCompletedCount}</span>
            </div>
            <div style={statItem}>
                <span style={statLabel}>Overall Progress</span>
                <span style={statValue}>{totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0}%</span>
            </div>
        </div>
    );
};

const statsContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 'var(--spacing-md)',
    marginBottom: 'var(--spacing-lg)',
};

const statItem = {
    backgroundColor: 'var(--bg-card)',
    padding: 'var(--spacing-md)',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--border)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: 'var(--shadow)',
};

const statLabel = {
    color: 'var(--text-secondary)',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: 'var(--spacing-sm)',
};

const statValue = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
};

export default Stats;
