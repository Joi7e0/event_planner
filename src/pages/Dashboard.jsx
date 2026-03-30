import React from 'react';
import Stats from '../components/Stats';
import { sectionStyles, sectionTitle } from '../styles/pageStyles';
import { Link } from 'react-router-dom';

const Dashboard = ({ statsData, historyLogs }) => {
  const recentLogs = historyLogs.slice(0, 3);

  return (
    <div>
      <section style={sectionStyles}>
        <h2 style={sectionTitle}>Your Progress Dashboard</h2>
        <Stats stats={statsData} />
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitle}>Recent Activity</h2>
        {recentLogs.length > 0 ? (
          <ul style={recentListStyles}>
            {recentLogs.map((log) => (
              <li key={log.id} style={recentItemStyles}>
                <strong>{log.habitName}</strong> marked as done on {log.date} at {log.time}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: 'var(--text-secondary)' }}>No activity yet.</p>
        )}
        <div style={{ marginTop: 'var(--spacing-md)' }}>
            <Link to="/history" style={linkStyle}>View Full History &rarr;</Link>
        </div>
      </section>
      
      <section style={{ ...sectionStyles, marginTop: '2rem', textAlign: 'center' }}>
        <Link to="/habits" style={ctaStyle}>Manage Habits</Link>
      </section>
    </div>
  );
};

const recentListStyles = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
};

const recentItemStyles = {
    padding: '12px',
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--border)',
    fontSize: '0.9rem',
    color: 'var(--text-primary)'
};

const linkStyle = {
    color: 'var(--primary)',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem'
};

const ctaStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: 'var(--primary)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: 'var(--radius)',
    fontWeight: '600',
    boxShadow: 'var(--shadow)',
    transition: 'opacity 0.2s'
};

export default Dashboard;
