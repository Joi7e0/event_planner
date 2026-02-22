import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import Stats from './components/Stats';
import History from './components/History';

function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('habits');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Drink 2L Water', streak: 5, completed: true },
      { id: 2, name: 'Morning Exercise', streak: 12, completed: false },
      { id: 3, name: 'Read for 30 mins', streak: 3, completed: true },
    ];
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('habitHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem('habitHistory', JSON.stringify(history));
  }, [history]);

  const handleAddHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      streak: 0,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  const handleToggleHabit = (id) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const newCompletedStatus = !habit.completed;
          if (newCompletedStatus) {
            const logEntry = {
              id: Date.now(),
              habitName: habit.name,
              date: new Date().toLocaleDateString(),
              time: new Date().toLocaleTimeString(),
            };
            setHistory([logEntry, ...history].slice(0, 50));
          }
          return { ...habit, completed: newCompletedStatus, streak: newCompletedStatus ? habit.streak + 1 : habit.streak };
        }
        return habit;
      })
    );
  };

  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const completedToday = habits.filter((h) => h.completed).length;
  const bestStreak = habits.length > 0 ? Math.max(...habits.map((h) => h.streak)) : 0;
  const totalCompletedCount = history.length;

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main style={mainStyles}>
        <div style={contentContainer}>
          {activeTab === 'dashboard' ? (
            <>
              <section style={sectionStyles}>
                <h2 style={sectionTitle}>Your Progress</h2>
                <Stats
                  totalHabits={habits.length}
                  completedToday={completedToday}
                  bestStreak={bestStreak}
                  totalCompletedCount={totalCompletedCount}
                />
              </section>

              <section style={sectionStyles}>
                <h2 style={sectionTitle}>Add New Habit</h2>
                <AddHabitForm onAdd={handleAddHabit} />
              </section>

              <section style={sectionStyles}>
                <h2 style={sectionTitle}>Daily Habits</h2>
                <HabitList
                  habits={habits}
                  onToggle={handleToggleHabit}
                  onDelete={handleDeleteHabit}
                />
              </section>
            </>
          ) : (
            <section style={sectionStyles}>
              <h2 style={sectionTitle}>Completion History</h2>
              <History logs={history} />
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

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
