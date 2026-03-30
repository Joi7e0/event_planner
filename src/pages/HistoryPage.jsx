import React from 'react';
import History from '../components/History';
import { sectionStyles, sectionTitle } from '../styles/pageStyles';

const HistoryPage = ({ historyLogs }) => {
  return (
    <div>
      <section style={sectionStyles}>
        <h2 style={sectionTitle}>Completion History</h2>
        <History logs={historyLogs} />
      </section>
    </div>
  );
};

export default HistoryPage;
