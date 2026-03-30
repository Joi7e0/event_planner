export const sectionStyles = {
  marginBottom: '40px',
};

export const sectionTitle = {
  fontSize: '1.25rem',
  fontWeight: '600',
  color: 'var(--text-secondary)',
  marginBottom: '4px',
  borderLeft: '4px solid var(--primary)',
  paddingLeft: 'var(--spacing-md)',
};

export const sectionSubtitleStyles = {
  fontSize: '0.83rem',
  color: 'var(--text-secondary)',
  marginBottom: 'var(--spacing-md)',
  paddingLeft: 'var(--spacing-md)',
  borderLeft: '4px solid transparent',
  opacity: 0.7,
};

export const filterHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 'var(--spacing-md)',
  paddingBottom: 'var(--spacing-sm)',
  borderBottom: '1px solid var(--border)',
};

export const filterGroupStyles = {
  display: 'flex',
  gap: '8px',
  backgroundColor: 'var(--bg-card)',
  padding: '4px',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--border)',
};

export const filterBtnStyles = {
  background: 'transparent',
  border: 'none',
  padding: '6px 12px',
  fontSize: '0.85rem',
  fontWeight: '600',
  color: 'var(--text-secondary)',
  cursor: 'pointer',
  borderRadius: 'var(--radius)',
  transition: 'all 0.2s',
};

export const activeFilterStyles = {
  backgroundColor: 'var(--primary)',
  color: 'white',
  boxShadow: 'var(--shadow)',
};
