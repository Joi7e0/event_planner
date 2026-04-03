import React, { createContext, useContext, useState } from 'react';

/* ── Available languages ── */
export const LANGUAGES = {
  en: { label: 'English', flag: '🇬🇧' },
  uk: { label: 'Українська', flag: '🇺🇦' },
};

/* ── Translations ── */
const TRANSLATIONS = {
  en: {
    dashboard: 'Dashboard',
    habits: 'Habits',
    history: 'History',
    inspiration: '✨ Inspiration',
    todayProgress: "Today's Progress",
    done: 'Done',
    buildBetter: 'Build better habits every day',
    footerCopy: '© 2026 HabitTracker Premium.',
    privacy: 'Privacy',
    terms: 'Terms',
    dayCompleted: "🎉 Day completed! You're crushing it!",
    progress: '📈 Progress',
    habitsDone: 'habits done.',
    language: 'Language',
  },
  uk: {
    dashboard: 'Головна',
    habits: 'Звички',
    history: 'Історія',
    inspiration: '✨ Натхнення',
    todayProgress: 'Прогрес сьогодні',
    done: 'Виконано',
    buildBetter: 'Будуй кращі звички щодня',
    footerCopy: '© 2026 HabitTracker Premium.',
    privacy: 'Конфіденційність',
    terms: 'Умови',
    dayCompleted: '🎉 День завершено! Чудова робота!',
    progress: '📈 Прогрес',
    habitsDone: 'звичок виконано.',
    language: 'Мова',
  },
};

/* ── Context ── */
const SettingsContext = createContext(null);

/* ── Provider ── */
export const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app-language') || 'en';
  });

  const changeLanguage = (lang) => {
    if (LANGUAGES[lang]) {
      setLanguage(lang);
      localStorage.setItem('app-language', lang);
    }
  };

  const t = (key) => TRANSLATIONS[language]?.[key] ?? TRANSLATIONS['en'][key] ?? key;

  return (
    <SettingsContext.Provider value={{ language, changeLanguage, t, LANGUAGES }}>
      {children}
    </SettingsContext.Provider>
  );
};

/* ── Custom hook ── */
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used inside a SettingsProvider');
  }
  return context;
};

export default SettingsContext;
