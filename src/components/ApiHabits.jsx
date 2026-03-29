import React, { useState, useEffect } from 'react';

/**
 * ApiHabits – компонент для відображення даних з API.
 * Реалізує три стани інтерфейсу: loading, error, success.
 * Використовує fetch + useEffect з порожнім масивом залежностей [].
 * Обробка помилок – try/catch та перевірка response.ok.
 */

const API_URL = 'https://jsonplaceholder.typicode.com/invalid-endpoint-404';

const ApiHabits = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || 'Невідома помилка при завантаженні даних');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ── Loading state ── */
  if (loading) {
    return (
      <div style={wrapperStyles}>
        <div style={loadingContainer}>
          <div style={spinnerStyles} />
          <p style={loadingText}>Завантаження даних...</p>
          <div style={shimmerRow}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={shimmerCard} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Error state ── */
  if (error) {
    return (
      <div style={wrapperStyles}>
        <div style={errorContainer}>
          <span style={errorIcon}>⚠️</span>
          <h3 style={errorTitle}>Помилка завантаження</h3>
          <p style={errorMessage}>{error}</p>
          <button
            style={retryButton}
            onClick={() => window.location.reload()}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            🔄 Спробувати знову
          </button>
        </div>
      </div>
    );
  }

  /* ── Success state ── */
  return (
    <div style={wrapperStyles}>
      <div style={headerRow}>
        <p style={countBadge}>
          <span style={countNumber}>{data.length}</span> завдань отримано
        </p>
        <div style={legendRow}>
          <span style={{ ...legendDot, backgroundColor: 'var(--accent)' }} />
          <span style={legendLabel}>Виконано</span>
          <span style={{ ...legendDot, backgroundColor: 'var(--warning)' }} />
          <span style={legendLabel}>В процесі</span>
        </div>
      </div>

      <div style={gridStyles}>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              ...cardStyles,
              borderLeft: item.completed
                ? '4px solid var(--accent)'
                : '4px solid var(--warning)',
            }}
          >
            <div style={cardHeader}>
              <span style={cardId}>#{item.id}</span>
              <span
                style={{
                  ...statusBadge,
                  backgroundColor: item.completed
                    ? 'rgba(16, 185, 129, 0.15)'
                    : 'rgba(234, 179, 8, 0.15)',
                  color: item.completed ? 'var(--accent)' : 'var(--warning)',
                }}
              >
                {item.completed ? '✓ Done' : '⏳ Pending'}
              </span>
            </div>
            <p
              style={{
                ...cardTitle,
                textDecoration: item.completed ? 'line-through' : 'none',
                opacity: item.completed ? 0.7 : 1,
              }}
            >
              {item.title}
            </p>
            <div style={cardFooter}>
              <span style={userBadge}>👤 User {item.userId}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   Inline Styles
   ══════════════════════════════════════════ */

const wrapperStyles = {
  width: '100%',
};

/* ── Loading ── */
const loadingContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--spacing-md)',
  padding: '48px 0',
};

const spinnerStyles = {
  width: '42px',
  height: '42px',
  border: '4px solid var(--border)',
  borderTopColor: 'var(--primary)',
  borderRadius: '50%',
  animation: 'apiHabitsSpin 0.8s linear infinite',
};

const loadingText = {
  fontSize: '1rem',
  fontWeight: '600',
  color: 'var(--text-secondary)',
  letterSpacing: '0.02em',
};

const shimmerRow = {
  display: 'flex',
  gap: 'var(--spacing-md)',
  width: '100%',
  maxWidth: '600px',
};

const shimmerCard = {
  flex: 1,
  height: '80px',
  borderRadius: 'var(--radius)',
  background:
    'linear-gradient(110deg, var(--bg-card) 30%, var(--border) 50%, var(--bg-card) 70%)',
  backgroundSize: '200% 100%',
  animation: 'apiHabitsShimmer 1.5s ease-in-out infinite',
};

/* ── Error ── */
const errorContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--spacing-md)',
  padding: '48px var(--spacing-lg)',
  backgroundColor: 'var(--bg-card)',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--danger)',
  boxShadow: '0 0 20px rgba(239, 68, 68, 0.08)',
  textAlign: 'center',
};

const errorIcon = {
  fontSize: '2.5rem',
};

const errorTitle = {
  fontSize: '1.2rem',
  fontWeight: '700',
  color: 'var(--danger)',
};

const errorMessage = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  maxWidth: '400px',
  lineHeight: '1.6',
};

const retryButton = {
  padding: '10px 24px',
  fontSize: '0.9rem',
  fontWeight: '700',
  color: '#fff',
  backgroundColor: 'var(--primary)',
  border: 'none',
  borderRadius: 'var(--radius)',
  cursor: 'pointer',
  transition: 'all 0.25s ease',
  boxShadow: 'var(--shadow)',
};

/* ── Success ── */
const headerRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 'var(--spacing-md)',
  flexWrap: 'wrap',
  gap: 'var(--spacing-sm)',
};

const countBadge = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  fontWeight: '500',
};

const countNumber = {
  fontWeight: '800',
  color: 'var(--primary)',
  fontSize: '1.1rem',
};

const legendRow = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
};

const legendDot = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  display: 'inline-block',
};

const legendLabel = {
  fontSize: '0.75rem',
  color: 'var(--text-secondary)',
  marginRight: '10px',
};

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
  gap: 'var(--spacing-md)',
};

const cardStyles = {
  backgroundColor: 'var(--bg-card)',
  padding: 'var(--spacing-md)',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow)',
  transition: 'all 0.25s ease',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const cardHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const cardId = {
  fontSize: '0.75rem',
  fontWeight: '700',
  color: 'var(--primary)',
  backgroundColor: 'rgba(99, 102, 241, 0.1)',
  padding: '2px 10px',
  borderRadius: '10px',
};

const statusBadge = {
  padding: '4px 14px',
  borderRadius: '20px',
  fontSize: '0.75rem',
  fontWeight: '700',
  whiteSpace: 'nowrap',
};

const cardTitle = {
  fontSize: '0.95rem',
  fontWeight: '600',
  color: 'var(--text-primary)',
  lineHeight: '1.4',
  textTransform: 'capitalize',
};

const cardFooter = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const userBadge = {
  fontSize: '0.7rem',
  fontWeight: '600',
  color: 'var(--text-secondary)',
  backgroundColor: 'var(--bg-main)',
  padding: '3px 10px',
  borderRadius: '8px',
};

export default ApiHabits;
