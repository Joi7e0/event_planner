import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404</h1>
      <h2 style={subtitleStyle}>Page Not Found</h2>
      <p style={descStyle}>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" style={linkStyle}>
        Return to Dashboard
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
  padding: 'var(--spacing-xl)'
};

const titleStyle = {
  fontSize: '6rem',
  color: 'var(--primary)',
  fontWeight: '800',
  lineHeight: 1,
  marginBottom: 'var(--spacing-md)'
};

const subtitleStyle = {
  fontSize: '2rem',
  color: 'var(--text-primary)',
  marginBottom: 'var(--spacing-sm)'
};

const descStyle = {
  color: 'var(--text-secondary)',
  fontSize: '1.1rem',
  marginBottom: 'var(--spacing-xl)'
};

const linkStyle = {
  padding: '12px 24px',
  backgroundColor: 'var(--primary)',
  color: 'white',
  textDecoration: 'none',
  borderRadius: 'var(--radius)',
  fontWeight: '600',
  transition: 'opacity 0.2s'
};

export default NotFound;
