import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ theme, toggleTheme, completedToday, totalHabits }) => {
  return (
    <>
      <Header
        title="Habit"
        titleAccent="Tracker"
        subtitle="Build better habits every day"
        completedCount={completedToday}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main style={mainStyles}>
        <div style={contentContainer}>
          <Outlet />
        </div>
      </main>
      <Footer stats={{ total: totalHabits, completed: completedToday }} />
    </>
  );
};

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

export default Layout;
