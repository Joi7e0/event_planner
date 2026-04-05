import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sectionStyles, sectionTitle } from '../styles/pageStyles';
import { useSettings } from '../context/SettingsContext';

const HabitDetail = ({ habits }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useSettings();

  const habit = habits.find((h) => h.id.toString() === id);

  if (!habit) {
    return (
      <div style={containerStyle}>
        <h2 style={{ color: 'var(--text-primary)' }}>{t('habitNotFound')}</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--spacing-md)' }}>
          {t('habitNotFoundDesc')} {id}.
        </p>
        <button onClick={() => navigate('/habits')} style={backButtonStyle}>
          {t('backToList')}
        </button>
      </div>
    );
  }

  const isDone = habit.completed;

  return (
    <div style={containerStyle}>
      <button onClick={() => navigate(-1)} style={backButtonStyle}>
        {t('goBack')}
      </button>

      <section style={sectionStyles}>
        <h2 style={sectionTitle}>{t('habitDetails')}</h2>
        <div style={detailCardStyle}>
          <div style={headerStyle}>
            <h3 style={{
              fontSize: '1.8rem',
              color: 'var(--text-primary)',
              textDecoration: isDone ? 'line-through' : 'none',
            }}>
              {habit.name}
            </h3>
            <span style={{
              ...statusBadge,
              backgroundColor: isDone ? 'rgba(16, 185, 129, 0.15)' : 'rgba(234, 179, 8, 0.15)',
              color: isDone ? 'var(--accent)' : 'var(--warning)',
            }}>
              {isDone ? t('statusCompleted') : t('statusPending')}
            </span>
          </div>

          <div style={infoGridStyle}>
            <div style={infoItemStyle}>
              <span style={infoLabelStyle}>{t('category')}</span>
              <span style={infoValueStyle}>{habit.category}</span>
            </div>
            <div style={infoItemStyle}>
              <span style={infoLabelStyle}>{t('currentStreak')}</span>
              <span style={infoValueStyle}>🔥 {habit.streak} {t('days')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const containerStyle = { padding: 'var(--spacing-md) 0' };

const backButtonStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--text-secondary)',
  cursor: 'pointer',
  fontSize: '0.9rem',
  padding: 0,
  marginBottom: 'var(--spacing-xl)',
  display: 'inline-block',
  transition: 'color 0.2s',
  textDecoration: 'none',
};

const detailCardStyle = {
  backgroundColor: 'var(--bg-card)',
  padding: 'var(--spacing-xl)',
  borderRadius: 'var(--radius)',
  boxShadow: 'var(--shadow)',
  border: '1px solid var(--border)',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid var(--border)',
  paddingBottom: 'var(--spacing-lg)',
  marginBottom: 'var(--spacing-lg)',
};

const statusBadge = {
  padding: '8px 16px',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: '600',
};

const infoGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: 'var(--spacing-lg)',
};

const infoItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  backgroundColor: 'rgba(99, 102, 241, 0.05)',
  padding: '16px',
  borderRadius: 'var(--radius)',
};

const infoLabelStyle = {
  fontSize: '0.8rem',
  color: 'var(--text-secondary)',
  textTransform: 'uppercase',
  fontWeight: '700',
  letterSpacing: '0.05em',
};

const infoValueStyle = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: 'var(--text-primary)',
};

export default HabitDetail;
