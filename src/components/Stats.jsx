import React from 'react';
import StatCard from './StatCard';

const Stats = ({ stats }) => {
    return (
        <div style={statsContainer}>
            {stats.map((stat) => (
                <StatCard
                    key={stat.id}
                    label={stat.label}
                    value={stat.value}
                    icon={stat.icon}
                />
            ))}
        </div>
    );
};

const statsContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 'var(--spacing-md)',
    marginBottom: 'var(--spacing-lg)',
};

export default Stats;
