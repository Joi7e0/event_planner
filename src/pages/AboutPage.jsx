import React from 'react';
import ApiHabits from '../components/ApiHabits';
import { sectionStyles, sectionTitle, sectionSubtitleStyles } from '../styles/pageStyles';

const AboutPage = () => {
  return (
    <div>
      <section style={{ ...sectionStyles, marginBottom: '20px' }}>
        <h2 style={sectionTitle}>About this App</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          This Habit Tracker is designed to help you build and maintain positive daily habits. 
          Use the dashboard to track your progress, log completions to build streaks, and stay motivated.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitle}>Daily Inspiration ✨</h2>
        <p style={sectionSubtitleStyles}>
          Motivational quotes fetched live from a public API
        </p>
        <ApiHabits />
      </section>
    </div>
  );
};

export default AboutPage;
