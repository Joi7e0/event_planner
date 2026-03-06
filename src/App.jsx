import React, { useState, useEffect } from 'react';
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
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits-data');
    if (savedHabits) {
      try {
        return JSON.parse(savedHabits);
      } catch (error) {
        console.error('Failed to parse habits data', error);
      }
    }
    return INITIAL_HABITS;
  });
  const [historyLogs, setHistoryLogs] = useState(() => {
    const savedHistoryLogs = localStorage.getItem('history-logs-data');
    if (savedHistoryLogs) {
      try {
        return JSON.parse(savedHistoryLogs);
      } catch (error) {
        console.error('Failed to parse history logs data', error);
      }
    }
    return INITIAL_HISTORY_LOGS;
  });
  const [currentView, setCurrentView] = useState('dashboard');
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'active', 'completed'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme-preference') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-preference', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    localStorage.setItem('habits-data', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem('history-logs-data', JSON.stringify(historyLogs));
  }, [historyLogs]);

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

  /* ── Filtered data ── */
  const filteredHabits = habits.filter((habit) => {
    if (filterMode === 'active') return !habit.completed;
    if (filterMode === 'completed') return habit.completed;
    return true; // 'all'
  });

  return (
    <>
      <Header
        title="Habit"
        titleAccent="Tracker"
        subtitle="Build better habits every day"
        completedCount={completedToday}
        currentView={currentView}
        onViewChange={setCurrentView}
        theme={theme}
        toggleTheme={toggleTheme}
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
                <div style={filterHeaderStyles}>
                  <h2 style={{ ...sectionTitle, margin: 0, borderLeft: 'none', paddingLeft: 0 }}>Daily Habits</h2>
                  <div style={filterGroupStyles}>
                    <button
                      style={{ ...filterBtnStyles, ...(filterMode === 'all' ? activeFilterStyles : {}) }}
                      onClick={() => setFilterMode('all')}
                    >
                      All
                    </button>
                    <button
                      style={{ ...filterBtnStyles, ...(filterMode === 'active' ? activeFilterStyles : {}) }}
                      onClick={() => setFilterMode('active')}
                    >
                      Active
                    </button>
                    <button
                      style={{ ...filterBtnStyles, ...(filterMode === 'completed' ? activeFilterStyles : {}) }}
                      onClick={() => setFilterMode('completed')}
                    >
                      Completed
                    </button>
                  </div>
                </div>
                <HabitList habits={filteredHabits} onToggle={toggleHabit} />
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

const filterHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 'var(--spacing-md)',
  paddingBottom: 'var(--spacing-sm)',
  borderBottom: '1px solid var(--border)',
};

const filterGroupStyles = {
  display: 'flex',
  gap: '8px',
  backgroundColor: 'var(--bg-card)',
  padding: '4px',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--border)',
};

const filterBtnStyles = {
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

const activeFilterStyles = {
  backgroundColor: 'var(--primary)',
  color: 'white',
  boxShadow: 'var(--shadow)',
};

export default App;
