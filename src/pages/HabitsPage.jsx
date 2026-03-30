import React from 'react';
import AddHabitForm from '../components/AddHabitForm';
import HabitList from '../components/HabitList';
import { sectionStyles, sectionTitle, filterHeaderStyles, filterGroupStyles, filterBtnStyles, activeFilterStyles } from '../styles/pageStyles';

const HabitsPage = ({ filterMode, setFilterMode, filteredHabits, addHabit, toggleHabit }) => {
  return (
    <div>
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
    </div>
  );
};

export default HabitsPage;
