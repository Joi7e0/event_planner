import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyles}>
            <div style={containerStyles}>
                <p style={textStyles}>&copy; 2026 HabitTracker. Built with ✨ for a better you.</p>
                <div style={linksStyles}>
                    <a href="#" style={linkStyles}>Privacy</a>
                    <a href="#" style={linkStyles}>Terms</a>
                </div>
            </div>
        </footer>
    );
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
