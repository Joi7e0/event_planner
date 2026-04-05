import React from 'react';
import History from '../components/History';
import { sectionStyles, sectionTitle } from '../styles/pageStyles';
import { useSettings } from '../context/SettingsContext';

const HistoryPage = ({ historyLogs }) => {
  const { t } = useSettings();

  return (
    <div>
      <section style={sectionStyles}>
        <h2 style={sectionTitle}>{t('completionHistory')}</h2>
        <History logs={historyLogs} />
      </section>
    </div>
  );
};

export default HistoryPage;
