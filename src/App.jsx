import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HabitList from './components/HabitList';
import Stats from './components/Stats';
import History from './components/History';
import AddHabitForm from './components/AddHabitForm';

/* ── Initial data ── */

const INITIAL_HABITS = [
  { id: 1, name: 'Drink 2L Water', streak: 5, completed: true, category: 'Health' },
  { id: 2, name: 'Morning Exercise', streak: 12, completed: false, category: 'Fitness' },
  { id: 3, name: 'Read for 30 mins', streak: 3, completed: true, category: 'Learning' },
  { id: 4, name: 'Meditate 10 mins', streak: 7, completed: true, category: 'Mindfulness' },
  { id: 5, name: 'Practice English', streak: 0, completed: false, category: 'Learning' },
  { id: 6, name: 'Walk 10 000 steps', streak: 21, completed: false, category: 'Fitness' },
];

const INITIAL_HISTORY_LOGS = [
  { id: 101, habitName: 'Drink 2L Water', date: '04.03.2026', time: '08:30' },
  { id: 102, habitName: 'Read for 30 mins', date: '04.03.2026', time: '09:15' },
  { id: 103, habitName: 'Meditate 10 mins', date: '04.03.2026', time: '07:00' },
  { id: 104, habitName: 'Morning Exercise', date: '03.03.2026', time: '06:45' },
  { id: 105, habitName: 'Drink 2L Water', date: '03.03.2026', time: '08:00' },
  { id: 106, habitName: 'Walk 10 000 steps', date: '02.03.2026', time: '18:30' },
  { id: 107, habitName: 'Practice English', date: '02.03.2026', time: '20:00' },
];

/* ── App component ── */

function App() {
  const [habits, setHabits] = useState(INITIAL_HABITS);
  const [historyLogs] = useState(INITIAL_HISTORY_LOGS);
  const [currentView, setCurrentView] = useState('dashboard');

  const toggleHabit = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const addHabit = (newHabit) => {
    const habitWithId = { ...newHabit, id: Date.now() };
    setHabits((prev) => [habitWithId, ...prev]);
  };

  /* ── Computed stats ── */
  const completedToday = habits.filter((h) => h.completed).length;
  const totalHabits = habits.length;
  const bestStreak = habits.length > 0 ? Math.max(...habits.map((h) => h.streak)) : 0;

  const statsData = [
    { id: 's1', label: 'Completed Today', value: `${completedToday} / ${totalHabits}`, icon: '✅' },
    { id: 's2', label: 'Best Streak', value: `${bestStreak} Days`, icon: '🔥' },
    { id: 's3', label: 'Total Logged', value: `${historyLogs.length}`, icon: '🏆' },
    { id: 's4', label: 'Overall Progress', value: `${totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0}%`, icon: '📊' },
  ];

  return (
    <>
      <Header
        title="Habit"
        titleAccent="Tracker"
        subtitle="Build better habits every day"
        completedCount={completedToday}
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      <main style={mainStyles}>
        <div style={contentContainer}>
          {currentView === 'dashboard' ? (
            <>
              <section style={sectionStyles}>
                <h2 style={sectionTitle}>Your Progress</h2>
                <Stats stats={statsData} />
              </section>

              <section style={sectionStyles}>
                <h2 style={sectionTitle}>Add New Habit</h2>
                <AddHabitForm onAdd={addHabit} />
              </section>

              <section style={sectionStyles}>
                <h2 style={sectionTitle}>Daily Habits</h2>
                <HabitList habits={habits} onToggle={toggleHabit} />
              </section>
            </>
          ) : (
            <section style={sectionStyles}>
              <h2 style={sectionTitle}>Completion History</h2>
              <History logs={historyLogs} />
            </section>
          )}
        </div>
      </main>

      <Footer stats={{ total: totalHabits, completed: completedToday }} />
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
