import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';

const NotFound = () => {
  const { t } = useSettings();

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404</h1>
      <h2 style={subtitleStyle}>{t('pageNotFound')}</h2>
      <p style={descStyle}>{t('pageNotFoundDesc')}</p>
      <Link to="/" style={linkStyle}>
        {t('returnToDashboard')}
      </Link>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '40vh',
  textAlign: 'center',
  padding: 'var(--spacing-xl)',
};

const titleStyle = {
  fontSize: '6rem',
  color: 'var(--primary)',
  fontWeight: '800',
  lineHeight: 1,
  marginBottom: 'var(--spacing-md)',
};

const subtitleStyle = {
  fontSize: '2rem',
  color: 'var(--text-primary)',
  marginBottom: 'var(--spacing-sm)',
};

const descStyle = {
  color: 'var(--text-secondary)',
  fontSize: '1.1rem',
  marginBottom: 'var(--spacing-xl)',
};

const linkStyle = {
  padding: '12px 24px',
  backgroundColor: 'var(--primary)',
  color: 'white',
  textDecoration: 'none',
  borderRadius: 'var(--radius)',
  fontWeight: '600',
  transition: 'opacity 0.2s',
};

export default NotFound;
