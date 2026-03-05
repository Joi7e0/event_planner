import React from 'react';

const Footer = ({ stats }) => {
    const isReadyForRest = stats?.completed === stats?.total && stats?.total > 0;

    return (
        <footer style={footerStyles}>
            <div style={containerStyles}>
                <div style={statsContainer}>
                    <p style={textStyles}>
                        &copy; 2026 HabitTracker Premium.
                        {stats && (
                            <span style={{
                                marginLeft: '12px',
                                color: isReadyForRest ? 'var(--accent)' : 'var(--text-secondary)',
                                fontWeight: isReadyForRest ? '700' : '400'
                            }}>
                                {isReadyForRest
                                    ? "🎉 Day completed! You're crushing it!"
                                    : `📈 Progress: ${stats.completed}/${stats.total} habits done.`}
                            </span>
                        )}
                    </p>
                </div>
                <div style={linksStyles}>
                    <span style={linkStyles}>Privacy</span>
                    <span style={linkStyles}>Terms</span>
                </div>
            </div>
        </footer>
    );
};

const statsContainer = {
    flex: '1',
};

const footerStyles = {
    marginTop: 'auto',
    backgroundColor: 'var(--bg-card)',
    padding: 'var(--spacing-lg) 0',
    borderTop: '1px solid var(--border)',
};

const containerStyles = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 var(--spacing-lg)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--spacing-md)',
};

const textStyles = {
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
};

const linksStyles = {
    display: 'flex',
    gap: 'var(--spacing-md)',
};

const linkStyles = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.85rem',
};

export default Footer;
