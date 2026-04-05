import React, { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext.jsx';
import { useSettings } from './context/SettingsContext.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import Layout from './components/Layout';

// Pages
import Dashboard from './pages/Dashboard';
import HabitsPage from './pages/HabitsPage';
import HistoryPage from './pages/HistoryPage';
import AboutPage from './pages/AboutPage';
import HabitDetail from './pages/HabitDetail';
import NotFound from './pages/NotFound';

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
  const [historyLogs] = useState(() => {
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
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'active', 'completed'
  const { theme } = useTheme();
  const { t } = useSettings();

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
    { id: 's1', label: t('completedToday'), value: `${completedToday} / ${totalHabits}`, icon: '✅' },
    { id: 's2', label: t('bestStreak'), value: `${bestStreak} ${t('days')}`, icon: '🔥' },
    { id: 's3', label: t('totalLogged'), value: `${historyLogs.length}`, icon: '🏆' },
    { id: 's4', label: t('overallProgress'), value: `${totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0}%`, icon: '📊' },
  ];

  /* ── Filtered data ── */
  const filteredHabits = habits.filter((habit) => {
    if (filterMode === 'active') return !habit.completed;
    if (filterMode === 'completed') return habit.completed;
    return true; // 'all'
  });

  return (
    <Routes>
      <Route element={
        <Layout
          completedToday={completedToday}
          totalHabits={totalHabits}
        />
      }>
        <Route path="/" element={<Dashboard statsData={statsData} historyLogs={historyLogs} />} />
        
        <Route path="/habits" element={
          <HabitsPage 
            filterMode={filterMode} 
            setFilterMode={setFilterMode} 
            filteredHabits={filteredHabits} 
            addHabit={addHabit} 
            toggleHabit={toggleHabit} 
          />
        } />
        
        <Route path="/habit/:id" element={<HabitDetail habits={habits} />} />
        
        <Route path="/history" element={<HistoryPage historyLogs={historyLogs} />} />
        
        <Route path="/about" element={<AboutPage />} />

        {/* Redirect from old-route to habits for example purposes */}
        <Route path="/old-route" element={<Navigate to="/habits" replace />} />
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
