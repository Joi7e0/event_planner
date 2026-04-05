import React from 'react';
import ApiHabits from '../components/ApiHabits';
import { sectionStyles, sectionTitle, sectionSubtitleStyles } from '../styles/pageStyles';
import { useSettings } from '../context/SettingsContext';

const AboutPage = () => {
  const { t } = useSettings();

  return (
    <div>
      <section style={{ ...sectionStyles, marginBottom: '20px' }}>
        <h2 style={sectionTitle}>{t('aboutApp')}</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          {t('aboutDesc')}
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitle}>{t('dailyInspiration')}</h2>
        <p style={sectionSubtitleStyles}>
          {t('inspirationSubtitle')}
        </p>
        <ApiHabits />
      </section>
    </div>
  );
};

export default AboutPage;
