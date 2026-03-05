import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HabitList from './components/HabitList';
import Stats from './components/Stats';
import History from './components/History';

/* ── Static data source (const arrays) ── */

const HABITS = [
  { id: 1, name: 'Drink 2L Water', streak: 5, completed: true, category: 'Health' },
  { id: 2, name: 'Morning Exercise', streak: 12, completed: false, category: 'Fitness' },
  { id: 3, name: 'Read for 30 mins', streak: 3, completed: true, category: 'Learning' },
  { id: 4, name: 'Meditate 10 mins', streak: 7, completed: true, category: 'Mindfulness' },
  { id: 5, name: 'Practice English', streak: 0, completed: false, category: 'Learning' },
  { id: 6, name: 'Walk 10 000 steps', streak: 21, completed: false, category: 'Fitness' },
];

const HISTORY_LOGS = [
  { id: 101, habitName: 'Drink 2L Water', date: '04.03.2026', time: '08:30' },
  { id: 102, habitName: 'Read for 30 mins', date: '04.03.2026', time: '09:15' },
  { id: 103, habitName: 'Meditate 10 mins', date: '04.03.2026', time: '07:00' },
  { id: 104, habitName: 'Morning Exercise', date: '03.03.2026', time: '06:45' },
  { id: 105, habitName: 'Drink 2L Water', date: '03.03.2026', time: '08:00' },
  { id: 106, habitName: 'Walk 10 000 steps', date: '02.03.2026', time: '18:30' },
  { id: 107, habitName: 'Practice English', date: '02.03.2026', time: '20:00' },
];

/* ── Computed stats (derived from HABITS, no business logic in components) ── */

const completedToday = HABITS.filter((h) => h.completed).length;
const bestStreak = Math.max(...HABITS.map((h) => h.streak));

const STATS = [
  { id: 's1', label: 'Completed Today', value: `${completedToday} / ${HABITS.length}`, icon: '✅' },
  { id: 's2', label: 'Best Streak', value: `${bestStreak} Days`, icon: '🔥' },
  { id: 's3', label: 'Total Logged', value: `${HISTORY_LOGS.length}`, icon: '🏆' },
  { id: 's4', label: 'Overall Progress', value: `${Math.round((completedToday / HABITS.length) * 100)}%`, icon: '📊' },
];

/* ── App component ── */

function App() {
  return (
    <>
      <Header title="Habit" titleAccent="Tracker" subtitle="Build better habits every day" />

      <main style={mainStyles}>
        <div style={contentContainer}>
          <section style={sectionStyles}>
            <h2 style={sectionTitle}>Your Progress</h2>
            <Stats stats={STATS} />
          </section>

          <section style={sectionStyles}>
            <h2 style={sectionTitle}>Daily Habits</h2>
            <HabitList habits={HABITS} />
          </section>

          <section style={sectionStyles}>
            <h2 style={sectionTitle}>Completion History</h2>
            <History logs={HISTORY_LOGS} />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ── Inline styles ── */

const mainStyles = {
  flex: 1,
  padding: 'var(--spacing-lg) 0',
  backgroundColor: 'var(--bg-main)',
};

const contentContainer = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 var(--spacing-lg)',
};

const sectionStyles = {
  marginBottom: '40px',
};

const sectionTitle = {
  fontSize: '1.25rem',
  fontWeight: '600',
  color: 'var(--text-secondary)',
  marginBottom: 'var(--spacing-md)',
  borderLeft: '4px solid var(--primary)',
  paddingLeft: 'var(--spacing-md)',
};

export default App;
