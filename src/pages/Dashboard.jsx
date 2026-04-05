import React from 'react';
import Stats from '../components/Stats';
import { sectionStyles, sectionTitle } from '../styles/pageStyles';
import { Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import { Button, Card } from '../components/ui';

const Dashboard = ({ statsData, historyLogs }) => {
  const { t } = useSettings();
  const recentLogs = historyLogs.slice(0, 3);

  return (
    <div>
      <section style={sectionStyles}>
        <h2 style={sectionTitle}>{t('yourProgressDashboard')}</h2>
        <Stats stats={statsData} />
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitle}>{t('recentActivity')}</h2>
        {recentLogs.length > 0 ? (
          <ul style={recentListStyles}>
            {recentLogs.map((log) => (
              <li key={log.id} style={{ listStyle: 'none' }}>
                <Card elevation="flat">
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>
                    <strong>{log.habitName}</strong>{' '}
                    {t('markedAsDone')} {log.date} {t('at')} {log.time}
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: 'var(--text-secondary)' }}>{t('noActivity')}</p>
        )}
        <div style={{ marginTop: 'var(--spacing-md)' }}>
          <Link to="/history" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm">{t('viewFullHistory')}</Button>
          </Link>
        </div>
      </section>

      <section style={{ ...sectionStyles, marginTop: '2rem', textAlign: 'center' }}>
        <Link to="/habits" style={{ textDecoration: 'none' }}>
          <Button variant="primary" size="lg">{t('manageHabits')}</Button>
        </Link>
      </section>
    </div>
  );
};

const recentListStyles = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

export default Dashboard;
