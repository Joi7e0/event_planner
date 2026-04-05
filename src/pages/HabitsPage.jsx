import React from 'react';
import AddHabitForm from '../components/AddHabitForm';
import HabitList from '../components/HabitList';
import { sectionStyles, sectionTitle, filterHeaderStyles, filterGroupStyles } from '../styles/pageStyles';
import { useSettings } from '../context/SettingsContext';
import { Button } from '../components/ui';

const HabitsPage = ({ filterMode, setFilterMode, filteredHabits, addHabit, toggleHabit }) => {
  const { t } = useSettings();

  const filters = [
    { key: 'all',       label: t('filterAll') },
    { key: 'active',    label: t('filterActive') },
    { key: 'completed', label: t('filterCompleted') },
  ];

  return (
    <div>
      <section style={sectionStyles}>
        <h2 style={sectionTitle}>{t('addNewHabit')}</h2>
        <AddHabitForm onAdd={addHabit} />
      </section>

      <section style={sectionStyles}>
        <div style={filterHeaderStyles}>
          <h2 style={{ ...sectionTitle, margin: 0, borderLeft: 'none', paddingLeft: 0 }}>
            {t('dailyHabits')}
          </h2>
          <div style={filterGroupStyles}>
            {filters.map(({ key, label }) => (
              <Button
                key={key}
                variant={filterMode === key ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setFilterMode(key)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
        <HabitList habits={filteredHabits} onToggle={toggleHabit} />
      </section>
    </div>
  );
};

export default HabitsPage;
