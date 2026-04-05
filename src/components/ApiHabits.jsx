import React, { useState, useEffect } from 'react';
import { useSettings } from '../context/SettingsContext';

/* ── ApiHabits ──────────────────────────────────────────────────────────────
   Fetches motivational quotes from Quotable API and renders them as
   inspiration cards. Implements three UI states: loading / error / success.
   ─────────────────────────────────────────────────────────────────────────── */

const API_URL = 'https://dummyjson.com/quotes?limit=6';

const ApiHabits = () => {
  const [quotes, setQuotes]   = useState([]);
  const [status, setStatus]   = useState('loading'); // 'loading' | 'error' | 'success'
  const [errorMsg, setErrorMsg] = useState('');
  const { t } = useSettings();

  useEffect(() => {
    const fetchQuotes = async () => {
      setStatus('loading');
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }
        const data = await response.json();
        setQuotes(data.quotes || []);
        setStatus('success');
      } catch (err) {
        setErrorMsg(err.message || 'Failed to load quotes.');
        setStatus('error');
      }
    };

    fetchQuotes();
  }, []); // empty deps → runs once on mount

  /* ── Loading state ── */
  if (status === 'loading') {
    return (
      <div style={stateWrapperStyles}>
        <div style={spinnerStyles} aria-label="Loading quotes" />
        <p style={stateTextStyles}>{t('fetchingInspiration')}</p>
      </div>
    );
  }

  /* ── Error state ── */
  if (status === 'error') {
    return (
      <div style={{ ...stateWrapperStyles, ...errorWrapperStyles }}>
        <span style={errorIconStyles}>⚠️</span>
        <p style={{ ...stateTextStyles, color: 'var(--warning)' }}>
          {t('couldNotLoad')}
        </p>
        <p style={errorDetailStyles}>{errorMsg}</p>
      </div>
    );
  }

  /* ── Success state ── */
  return (
    <div style={gridStyles}>
      {quotes.map((quote) => (
        <article key={quote.id} style={cardStyles}>
          <span style={quoteMarkStyles}>&ldquo;</span>
          <p style={quoteTextStyles}>{quote.quote}</p>
          <footer style={quoteFooterStyles}>
            <span style={authorBadgeStyles}>— {quote.author}</span>
          </footer>
        </article>
      ))}
    </div>
  );
};

/* ── Styles ──────────────────────────────────────────────────────────────── */

const stateWrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '180px',
  gap: '12px',
};

const errorWrapperStyles = {
  backgroundColor: 'rgba(234, 179, 8, 0.08)',
  borderRadius: 'var(--radius)',
  border: '1px solid rgba(234, 179, 8, 0.25)',
  padding: '24px',
};

const spinnerStyles = {
  width: '40px',
  height: '40px',
  border: '3px solid var(--border)',
  borderTop: '3px solid var(--primary)',
  borderRadius: '50%',
  animation: 'spin 0.8s linear infinite',
};

const stateTextStyles = {
  fontSize: '1rem',
  color: 'var(--text-secondary)',
  margin: 0,
};

const errorIconStyles = {
  fontSize: '2rem',
};

const errorDetailStyles = {
  fontSize: '0.8rem',
  color: 'var(--text-secondary)',
  margin: 0,
  fontFamily: 'monospace',
};

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
  gap: 'var(--spacing-md)',
};

const cardStyles = {
  backgroundColor: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderLeft: '4px solid var(--primary)',
  borderRadius: 'var(--radius)',
  padding: 'var(--spacing-md)',
  boxShadow: 'var(--shadow)',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  transition: 'var(--transition)',
  position: 'relative',
};

const quoteMarkStyles = {
  fontSize: '3rem',
  lineHeight: 1,
  color: 'var(--primary)',
  opacity: 0.25,
  fontFamily: 'Georgia, serif',
  position: 'absolute',
  top: '8px',
  left: '14px',
  userSelect: 'none',
};

const quoteTextStyles = {
  fontSize: '0.92rem',
  lineHeight: 1.6,
  color: 'var(--text-primary)',
  margin: '20px 0 0 0',
  fontStyle: 'italic',
};

const quoteFooterStyles = {
  marginTop: 'auto',
  paddingTop: '8px',
  borderTop: '1px solid var(--border)',
};

const authorBadgeStyles = {
  fontSize: '0.78rem',
  fontWeight: '600',
  color: 'var(--primary)',
  letterSpacing: '0.02em',
};

export default ApiHabits;
